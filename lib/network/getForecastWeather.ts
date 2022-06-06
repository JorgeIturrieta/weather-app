import { Daily } from '@/types/weatherApi/apiWeatherForecast.interface'
import { QueryParamsWeatherForecastApi } from '@/types/weatherApi/queryParams.type'
import proxyApi from './apiProxy'
import { getCurrentWeather } from './currentWeather'
const getForeCast = async (params: QueryParamsWeatherForecastApi) => {
  const resp = await proxyApi.get<Daily[]>('/forecast', { params })

  return resp.data
}

export const getForecastWeather = async ({ lat, lon }: QueryParamsWeatherForecastApi) => {
  const resp = await Promise.all([getCurrentWeather({ lat, lon }), getForeCast({ lat, lon })])

  return resp
}
