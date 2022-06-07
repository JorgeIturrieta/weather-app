// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ForeCastWeather } from '@/types/weatherApi/apiWeatherForecast.interface'
import { WeatherForecastAdapted } from '@/types/weatherForecast.interface'
import getHumanReadableTime from 'lib/getHumanReadableTime'
import { cors, runMiddleware } from 'lib/initMiddleware'
import apiConf from 'lib/network/api.config'
import weatherApi from 'lib/network/apiClient'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherForecastAdapted[]>
) {
  await runMiddleware(req, res, cors)

  const resp = await weatherApi.get<ForeCastWeather>('/onecall', {
    params: { ...req.query, exclude: 'current,minutely,hourly', appid: apiConf.apiKey },
  })
  const timezoneOffset = resp.data.timezone_offset
  const respAdapted = resp.data.daily.map<WeatherForecastAdapted>(day => ({
    day: getHumanReadableTime(day.dt, timezoneOffset, {
      day: 'numeric',
      weekday: 'long',
      month: 'long',
    }),
    temp_max: day.temp.max,
    temp_min: day.temp.min,
    sunrise: getHumanReadableTime(day.sunrise, timezoneOffset, {
      hour: 'numeric',
      minute: 'numeric',
    }),
    sunset: getHumanReadableTime(day.sunset, timezoneOffset, {
      hour: 'numeric',
      minute: 'numeric',
    }),
  }))

  res.status(200).json(respAdapted)
}
