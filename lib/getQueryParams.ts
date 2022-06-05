// You can use this function for all of your queries param
// For example  if you have the input = {  lat:234.2 long: 89,units:metric }
// the output will be => lat=234.2&long=89&units=metric
export const getQueryParams = (params: { [k: string]: number | string }): string => {
  let nameParams = Object.keys(params)
  return nameParams.map(value => `${value}=${params[value as keyof typeof params]}`).join('&')
}
