// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Daily, ForeCastWeather } from '@/types/weatherApi/apiWeatherForecast.interface'
import { cors, runMiddleware } from 'lib/initMiddleware'
import apiConf from 'lib/network/api.config'
import weatherApi from 'lib/network/apiClient'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Daily[]>) {
  await runMiddleware(req, res, cors)

  const resp = await weatherApi.get<ForeCastWeather>('/onecall', {
    params: { ...req.query, exclude: 'current,minutely,hourly', appid: apiConf.apiKey },
  })

  res.status(200).json(resp.data.daily.slice(1, 6))
}
