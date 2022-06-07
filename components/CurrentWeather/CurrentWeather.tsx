import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import { WeatherAdapted } from '../../types/weather.interface'
import styles from './CurrentWeather.module.scss'
type CurrentWeatherProps = {
  data: WeatherAdapted
}
export const CurrentWeather: FunctionComponent<CurrentWeatherProps> = ({ data }) => {
  return (
    <div>
      <h2>Pronostico para hoy</h2>
      <h3 className={styles.title}>
        {data.day} en {data.city}, {data.country}
      </h3>
      <span>
        Hora local:
        <span className={styles.weatherHour}> {data.hour} hs</span>
      </span>
      <div className={styles.container}>
        <div>
          <div className={styles.description}>
            <div className={styles.flex}>
              <span className={styles.temperature}>{data.temp}°</span>
              <span>
                {data.temp_min}° / {data.temp_max}°{' '}
              </span>
            </div>
            <div>
              <Image
                src={`https://openweathermap.org/img/w/${data.icon}.png`}
                alt={data.description}
                width={80}
                height={80}
              />
            </div>
            <span className={styles.weatherDescription}>{data.description}</span>
          </div>
        </div>

        <div className={styles.forecast}>
          <span>Sensación termica: {data.feels_like}°</span>
          <span>
            {' '}
            Amanecer: {data.sunrise}
            hs
          </span>
          <span>
            Puesta de Sol: {data.sunset}
            hs
          </span>
        </div>
      </div>
    </div>
  )
}
