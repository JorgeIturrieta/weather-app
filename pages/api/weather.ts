// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getQueryParams } from 'lib/getQueryParams'
import { cors, runMiddleware } from 'lib/initMiddleware'
import apiConf from 'lib/network/api.config'
import weatherApi from 'lib/network/apiClient'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Weather } from 'types/weatherApi/apiWeahter.interface'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Weather>) {
  await runMiddleware(req, res, cors)

  const queryParams = getQueryParams(req.query)
  const resp = await weatherApi.get<Weather>(`/weather?${queryParams}&appid=${apiConf.apiKey}`)

  res.status(200).json(resp.data)
}
