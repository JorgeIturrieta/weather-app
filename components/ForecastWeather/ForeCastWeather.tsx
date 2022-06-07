import getHumanReadableTime from 'lib/getHumanReadableTime'
import React, { FunctionComponent } from 'react'
import { Daily } from '../../types/weatherApi/apiWeatherForecast.interface'
import style from './ForecastWeather.module.scss'
type ForeCastWeatherProps = {
  data: Daily[]
  timezone: number
}

const ForeCastWeather: FunctionComponent<ForeCastWeatherProps> = ({ data, timezone }) => {
  return (
    <div>
      <h2>Pronóstico extendido</h2>
      <div className={style.containerGrid}>
        {data.map((day, idx) => (
          <div key={idx} className={style.gridItem}>
            <h3>
              {getHumanReadableTime(day.dt, timezone, {
                day: 'numeric',
                weekday: 'long',
                month: 'long',
              })}
            </h3>
            <p>Máx: {day.temp.max}°</p>
            <p>Min: {day.temp.min}°</p>
            <p>
              Amanecer:{' '}
              {getHumanReadableTime(day.sunrise, timezone, {
                hour: 'numeric',
                minute: 'numeric',
              })}
              hs
            </p>
            <p>
              Atardecer:{' '}
              {getHumanReadableTime(day.sunset, timezone, {
                hour: 'numeric',
                minute: 'numeric',
              })}
              hs
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForeCastWeather
