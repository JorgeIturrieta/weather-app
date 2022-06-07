/* eslint-disable indent */
import { Weather } from '@/types/weatherApi/apiWeahter.interface'
import { Daily } from '@/types/weatherApi/apiWeatherForecast.interface'
import { useEffect, useState } from 'react'
import { getForecastWeather } from '../lib/network/getForecastWeather'

export const useLocation = () => {
  const [errorLocation, setErrorLocation] = useState<null | string>(null)
  const [errorResponse, setErrorResponse] = useState<null | string>(null)
  const [data, setData] = useState<null | [Weather, Daily[]]>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then(function (permissionStatus) {
      permissionStatus.onchange = function () {
        setDisabled(permissionStatus.state === 'denied')
      }
    })
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
    } catch (error: any) {
      setErrorResponse(error.message)
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
    disabled,
  }
}

export default useLocation
