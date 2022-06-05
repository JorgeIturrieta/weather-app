import getHumanReadableCountry from 'lib/getHumanReadableCountry'
import React, { FunctionComponent, useState } from 'react'
import { Weather } from 'types/weatherApi/apiWeahter.interface'
import { CurrentWeather } from '../CurrentWeather/CurrentWeather'
import styles from './WeatherSelector.module.scss'
type WeatherSelectorProps = {
  currentWeather: Weather[]
}
const WeatherSelector: FunctionComponent<WeatherSelectorProps> = ({ currentWeather }) => {
  const [index, setIndex] = useState<number>(-1)
  return (
    <div>
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
            {weather.name}, {getHumanReadableCountry(weather.sys.country)}
          </option>
        ))}
      </select>

      {index > -1 && <CurrentWeather data={currentWeather[index]} />}
    </div>
  )
}

export default WeatherSelector
