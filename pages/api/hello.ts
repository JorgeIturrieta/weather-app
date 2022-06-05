// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { cors, runMiddleware } from 'lib/initMiddleware'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await runMiddleware(req, res, cors)
  res.status(200).json({ name: 'John Doe' })
}
