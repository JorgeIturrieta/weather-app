const getHumanReadableTime = (
  time: number,
  timeZoneOffset: number,
  options: Intl.DateTimeFormatOptions | undefined
) => {
  const event = new Date(1000 * (time + timeZoneOffset))
  return event.toLocaleString('es-Es', options)
}

export default getHumanReadableTime
