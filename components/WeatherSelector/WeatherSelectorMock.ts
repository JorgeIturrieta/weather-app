import { WeatherAdapted } from '../../types/weather.interface'
const city1: WeatherAdapted = {
  temp: 15.06,
  day: 'miércoles, 8 de junio',
  hour: '11:48',
  icon: '03d',
  description: 'nubes dispersas',
  temp_max: 15.06,
  temp_min: 15.06,
  feels_like: 13.59,
  sunrise: '8:29',
  sunset: '18:37',
  city: 'Tokio',
  country: 'Japon',
  timezoneOffset: -10800,
}

const city2: WeatherAdapted = {
  temp: 15.06,
  day: 'miércoles, 8 de junio',
  hour: '11:48',
  icon: '03d',
  description: 'nubes dispersas',
  temp_max: 15.06,
  temp_min: 15.06,
  feels_like: 13.59,
  sunrise: '8:29',
  sunset: '18:37',
  city: 'San Juan',
  country: 'Argentina',
  timezoneOffset: -10800,
}

const city3: WeatherAdapted = {
  temp: 15.06,
  day: 'miércoles, 8 de junio',
  hour: '11:48',
  icon: '03d',
  description: 'nubes dispersas',
  temp_max: 15.06,
  temp_min: 15.06,
  feels_like: 13.59,
  sunrise: '8:29',
  sunset: '18:37',
  city: 'Chicago',
  country: 'Estados Unidos',
  timezoneOffset: -10800,
}

export const weatherSelectorMock = [city1, city2, city3]
