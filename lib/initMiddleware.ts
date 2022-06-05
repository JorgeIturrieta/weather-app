import Cors from 'cors'
import type { NextApiRequest, NextApiResponse } from 'next'
export const cors = Cors({
  methods: 'GET',
})

export const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: Function) => {
  return new Promise((resolve, reject) => {
    fn(req, res, <Type>(result: Type) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}
