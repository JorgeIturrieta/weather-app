import { Weather } from '@/types/weatherApi/apiWeahter.interface'
import { QueryParamsWeatherApi } from '@/types/weatherApi/queryParams.type'
import { getQueryParams } from 'lib/getQueryParams'
import proxyApi from './apiProxy'

export const getCurrentWeather = async (params: QueryParamsWeatherApi) => {
  // const queryParams = getQueryParams({ ...params, ...apiConf })
  const queryParams = getQueryParams(params)
  const resp = await proxyApi.get<Weather>(`/weather?${queryParams}`)
  return resp.data
}

export const getCitiesWeather = async () => {
  // As you can see, you can send the request by name (city/ country) OR lat/lon but not both!
  const resp = await Promise.all([
    getCurrentWeather({ q: 'Seul' }), // Seul South Corea
    getCurrentWeather({ q: 'Barcelona' }), // Barcelona España
    getCurrentWeather({ q: 'Tokio' }), // Tokio - Japon
    getCurrentWeather({ lat: 41.85, lon: -87.65 }), // Chicago United State
    getCurrentWeather({ lat: 43.7001, lon: -79.4163 }), // Toronto Canada
  ])

  return resp
}
