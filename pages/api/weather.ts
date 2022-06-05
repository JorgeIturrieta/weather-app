// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { cors, runMiddleware } from 'lib/initMiddleware'
import apiConf from 'lib/network/api.config'
import weatherApi from 'lib/network/apiClient'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Weather } from 'types/weatherApi/apiWeahter.interface'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Weather>) {
  await runMiddleware(req, res, cors)

  const resp = await weatherApi.get<Weather>('/weather', {
    params: { ...req.query, appid: apiConf.apiKey },
  })

  res.status(200).json(resp.data)
}
