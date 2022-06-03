import { Weather } from '@/types/weatherApi/api.interface'
import { WeatherData } from '@/types/weatherData.interface'
import { Daily } from '../types/weatherApi/api.interface'
import { DailyForecast } from '../types/weatherData.interface'
import buildHumanReadableCity from './buildHumanReadableCity'
import buildHumanReadableTime from './buildHumanReadableTime'

const timeOption: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
}

const hourOption: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'UTC',
}

const buildWeatherData = (data: Weather): WeatherData => {
  return {
    city: buildHumanReadableCity(data.timezone),
    timezone_offset: data.timezone_offset,
    current: {
      ...data.current,
      humanReadableTime: {
        hour: buildHumanReadableTime(data.current.dt, data.timezone_offset, hourOption),
        day: buildHumanReadableTime(data.current.dt, data.timezone_offset, timeOption),
      },
    },
    daily: buildDaily(data.daily, data.timezone_offset),
  }
}

const buildDaily = (daily: Daily[], timezone_offset: number): DailyForecast[] => {
  return daily.map(day => ({
    ...day,
    humanReadableTime: {
      hour: buildHumanReadableTime(day.dt, timezone_offset, hourOption),
      day: buildHumanReadableTime(day.dt, timezone_offset, timeOption),
    },
  }))
}

export default buildWeatherData
