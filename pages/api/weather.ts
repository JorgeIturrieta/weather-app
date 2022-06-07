// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import getHumanReadableCountry from 'lib/getHumanReadableCountry'
import getHumanReadableTime from 'lib/getHumanReadableTime'
import { cors, runMiddleware } from 'lib/initMiddleware'
import apiConf from 'lib/network/api.config'
import weatherApi from 'lib/network/apiClient'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Weather } from 'types/weatherApi/apiWeahter.interface'
import { WeatherAdapted } from '../../types/weather.interface'

export default async function handler(req: NextApiRequest, res: NextApiResponse<WeatherAdapted>) {
  await runMiddleware(req, res, cors)

  const { data } = await weatherApi.get<Weather>('/weather', {
    params: { ...req.query, appid: apiConf.apiKey },
  })

  const adaptedResp: WeatherAdapted = {
    temp: data.main.temp,
    day: getHumanReadableTime(data.dt, data.timezone, {
      day: 'numeric',
      weekday: 'long',
      month: 'long',
    }),
    hour: getHumanReadableTime(data.dt, data.timezone, { hour: 'numeric', minute: 'numeric' }),
    icon: data.weather[0].icon,
    description: data.weather[0].description,
    temp_max: data.main.temp_max,
    temp_min: data.main.temp_min,
    feels_like: data.main.feels_like,
    sunrise: getHumanReadableTime(data.sys.sunrise, data.timezone, {
      hour: 'numeric',
      minute: 'numeric',
    }),
    sunset: getHumanReadableTime(data.sys.sunset, data.timezone, {
      hour: 'numeric',
      minute: 'numeric',
    }),
    city: data.name,
    country: getHumanReadableCountry(data.sys.country) || ' ',
    timezoneOffset: data.timezone,
  }
  res.status(200).json(adaptedResp)
}
