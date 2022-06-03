import { Current, Daily } from './weatherApi/api.interface'
export interface WeatherData {
  city: string
  timezone_offset: number
  current: CurrentTime
  daily: DailyForecast[]
}

export interface CurrentTime extends Current {
  humanReadableTime: Time
}

export interface DailyForecast extends Daily {
  humanReadableTime: Time
}

export interface Time {
  hour: string
  day: string
}
