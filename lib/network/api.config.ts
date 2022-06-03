//  For more information please visit the official documentation :)
// https://openweathermap.org/api/one-call-3
const apiConf = {
  exclude: ['hourly', 'minutely', 'alerts'].join(','),
  lang: 'es',
  appid: 'caa73ff627338c13626fd01c1ba02668',
  units: 'metric',
}

export default apiConf