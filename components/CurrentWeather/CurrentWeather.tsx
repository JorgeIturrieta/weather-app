import { Weather } from '@/types/weatherApi/apiWeahter.interface'
import getHumanReadableCountry from 'lib/getHumanReadableCountry'
import getHumanReadableTime from 'lib/getHumanReadableTime'
import React, { FunctionComponent } from 'react'
type CurrentWeatherProps = {
  data: Weather
}
export const CurrentWeather: FunctionComponent<CurrentWeatherProps> = ({ data }) => {
  return (
    <div>
      <h3>
        Pronostico para hoy{' '}
        {getHumanReadableTime(data.dt, data.timezone, {
          day: 'numeric',
          timeZone: 'UTC',
          weekday: 'long',
          month: 'long',
        })}{' '}
        en {data.name} , {getHumanReadableCountry(data.sys.country)}
      </h3>
      <h3>
        Hora local:{' '}
        {getHumanReadableTime(data.dt, data.timezone, {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: 'UTC',
        })}
      </h3>
      <p>Temperatura: {data.main.temp}°</p>
      <p>Mínima: {data.main.temp_min}°</p>
      <p>Máxima: {data.main.temp_max}°</p>
      <p>Sensación térmica {data.main.feels_like}</p>
      <p>
        Amanecer:{' '}
        {getHumanReadableTime(data.sys.sunrise, data.timezone, {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: 'UTC',
        })}{' '}
        hs
      </p>
      <p>
        Puesta de Sol:{' '}
        {getHumanReadableTime(data.sys.sunset, data.timezone, {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: 'UTC',
        })}{' '}
        hs
      </p>

      <p>{data.weather[0].description}</p>
    </div>
  )
}
