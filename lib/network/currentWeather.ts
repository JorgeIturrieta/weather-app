import { Weather } from '@/types/weatherApi/api.interface'
import buildWeatherData from 'lib/buildWeatherData'
import apiConf from './api.config'
import weatherApi from './apiClient'
const { appid, exclude, lang, units } = apiConf

export const getCurrentWeather = async (lat: number, long: number) => {
  const resp = await weatherApi.get<Weather>(
    `/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&appid=${appid}&units=${units}&lang=${lang}`
  )
  return buildWeatherData(resp.data)
}
