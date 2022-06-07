import React, { FunctionComponent } from 'react'
import { WeatherForecastAdapted } from '../../types/weatherForecast.interface'
import style from './ForecastWeather.module.scss'
type ForeCastWeatherProps = {
  data: WeatherForecastAdapted[]
}

const ForeCastWeather: FunctionComponent<ForeCastWeatherProps> = ({ data }) => {
  return (
    <div>
      <h2>Pronóstico extendido</h2>
      <div className={style.containerGrid}>
        {data.map((day, idx) => (
          <div key={idx} className={style.gridItem}>
            <h3>{day.day}</h3>
            <p>Máx: {day.temp_max}°</p>
            <p>Min: {day.temp_min}°</p>
            <p>
              Amanecer: {day.sunrise}
              hs
            </p>
            <p>
              Atardecer: {day.sunset}
              hs
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForeCastWeather
