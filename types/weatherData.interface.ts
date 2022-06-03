import { Current, Daily } from './weatherApi/api.interface'
export interface WeatherData {
  city: string
  timezone_offset: number
  current: CurrentTime
  daily: DailyForecast
}

export interface CurrentTime extends Current {
  humanReadableTime: string
}

export interface DailyForecast extends Daily {
  humanReadableTime: string
}
