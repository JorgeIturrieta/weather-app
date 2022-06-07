import { Weather } from '@/types/weatherApi/apiWeahter.interface'
import getHumanReadableCountry from 'lib/getHumanReadableCountry'
import getHumanReadableTime from 'lib/getHumanReadableTime'
import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import styles from './CurrentWeather.module.scss'
type CurrentWeatherProps = {
  data: Weather
}
export const CurrentWeather: FunctionComponent<CurrentWeatherProps> = ({ data }) => {
  return (
    <div>
      <h2>Pronostico para hoy</h2>
      <h3>
        {getHumanReadableTime(data.dt, data.timezone, {
          day: 'numeric',
          timeZone: 'UTC',
          weekday: 'long',
          month: 'long',
        })}{' '}
        en {data.name} , {getHumanReadableCountry(data.sys.country)}
      </h3>
      <div className={styles.container}>
        <div>
          <div className={styles.description}>
            <span className={styles.temperature}>{data.main.temp}°</span>
            <div>
              <Image
                src={`https://openweathermap.org//img/w/${data.weather[0].icon}.png`}
                alt={data.weather[0].description}
                width={80}
                height={80}
              />
            </div>
            <span className={styles.weatherDescription}>{data.weather[0].description}</span>
          </div>
          <span>
            {data.main.temp_min}° / {data.main.temp_max}°{' '}
          </span>
        </div>

        <div className={styles.forecast}>
          <span>Sensación termica: {data.main.feels_like}°</span>
          <span>
            {' '}
            Amanecer:{' '}
            {getHumanReadableTime(data.sys.sunrise, data.timezone, {
              hour: 'numeric',
              minute: 'numeric',
              timeZone: 'UTC',
            })}
            hs
          </span>
          <span>
            Puesta de Sol:{' '}
            {getHumanReadableTime(data.sys.sunset, data.timezone, {
              hour: 'numeric',
              minute: 'numeric',
              timeZone: 'UTC',
            })}
            hs
          </span>
        </div>
      </div>
    </div>
  )
}
