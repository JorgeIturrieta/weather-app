import { QueryParamsWeatherApi } from '@/types/weatherApi/queryParams.type'
import { WeatherAdapted } from '../../types/weather.interface'
import proxyApi from './apiProxy'

export const getCurrentWeather = async (params: QueryParamsWeatherApi) => {
  const resp = await proxyApi.get<WeatherAdapted>('/weather', { params })
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
