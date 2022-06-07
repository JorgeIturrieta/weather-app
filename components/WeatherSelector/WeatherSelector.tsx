import React, { FunctionComponent, useState } from 'react'
import { WeatherAdapted } from '../../types/weather.interface'
import { CurrentWeather } from '../CurrentWeather/CurrentWeather'
import styles from './WeatherSelector.module.scss'
type WeatherSelectorProps = {
  currentWeather: WeatherAdapted[]
}
const WeatherSelector: FunctionComponent<WeatherSelectorProps> = ({ currentWeather }) => {
  const [index, setIndex] = useState<number>(-1)
  return (
    <div>
      <h2>Buscar clima por ciudad:</h2>
      <select
        value={index}
        className={styles.selectCity}
        onChange={e => setIndex(parseInt(e.target.value))}
      >
        <option value={-1} disabled>
          Seleccione una ciudad
        </option>
        {currentWeather.map((weather, idx) => (
          <option key={idx} value={idx}>
            {`${weather.city} - ${weather.country} `}
          </option>
        ))}
      </select>

      {index > -1 && <CurrentWeather data={currentWeather[index]} />}
    </div>
  )
}

export default WeatherSelector
