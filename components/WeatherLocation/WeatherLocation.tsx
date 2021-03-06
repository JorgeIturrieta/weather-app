import useLocation from '../../hooks/useLocation'
import { CurrentWeather } from '../CurrentWeather/CurrentWeather'
import ForeCastWeather from '../ForecastWeather/ForeCastWeather'
const WeatherLocation = () => {
  const { data, errorLocation, errorResponse, loading, getLocation } = useLocation()
  return (
    <div>
      {errorLocation ? (
        <div>
          <p>Lo sentimos no pudimos obtener su ubicación: {errorLocation} </p>
          <p>
            Active la ubicación en su dispositivo o navegador y luego pulse el boton Obtener mi
            ubicación
          </p>
          <button onClick={getLocation}>Obtener mi ubicación</button>
        </div>
      ) : null}

      {loading ? <p>Cargando....</p> : null}
      {data ? (
        <>
          <CurrentWeather data={data?.[0]} />
          <ForeCastWeather data={data?.[1]} />
        </>
      ) : null}
      {errorResponse ? <p id='error'>{errorResponse}</p> : null}
      <br />
      <hr />
    </div>
  )
}

export default WeatherLocation
