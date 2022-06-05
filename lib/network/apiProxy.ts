import axios from 'axios'
import apiConf from './api.config'

const axiosClientProxy = axios.create({
  baseURL: `${apiConf.host}/api`,
  params: { lang: 'es', units: 'metric' },
  headers: {
    'Content-type': 'application/json',
  },
})

export default axiosClientProxy
