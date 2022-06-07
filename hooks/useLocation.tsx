/* eslint-disable indent */
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { getForecastWeather } from '../lib/network/getForecastWeather'
import { WeatherAdapted } from '../types/weather.interface'
import { WeatherForecastAdapted } from '../types/weatherForecast.interface'
type ServerError = { message: string }
export const useLocation = () => {
  const [errorLocation, setErrorLocation] = useState<null | string>(null)
  const [errorResponse, setErrorResponse] = useState<null | string>(null)
  const [data, setData] = useState<null | [WeatherAdapted, WeatherForecastAdapted[]]>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    getLocation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getLocation = () => {
    if (!navigator.geolocation) {
      setErrorLocation('La geolocalización no es sopartada en su navegador')
    } else {
      navigator.geolocation.getCurrentPosition(successLocation, error)
    }
  }

  const successLocation = async (position: GeolocationPosition) => {
    try {
      setLoading(true)
      setErrorLocation(null)
      const resp = await getForecastWeather({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
      setData(resp)
    } catch (error) {
      const serverError = error as AxiosError<ServerError>
      if (serverError && serverError.response) {
        setErrorResponse(serverError.response.data.message)
      } else {
        setErrorResponse('Hubo un problema al realizar la consulta')
      }
    } finally {
      setLoading(false)
    }
  }

  const error = (err: GeolocationPositionError) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError/code

    switch (err.code) {
      case err.PERMISSION_DENIED:
        setErrorLocation('¡Permiso denegado!')
        break
      case err.POSITION_UNAVAILABLE:
        setErrorLocation('Error interno')
        break
      case err.TIMEOUT:
        setErrorLocation('La informacion no fue obtenida en el tiempo esperado')
        break
    }
  }

  return {
    loading,
    data,
    errorLocation,
    errorResponse,
    getLocation,
  }
}

export default useLocation
