import getHumanReadableCountry from '../getHumanReadableCountry'
import getHumanReadableTime from '../getHumanReadableTime'
describe('Utils Funtions', () => {
  const timeMock = 1654604910
  const timeZoneOffsetMock = -10800 // utc -3
  const optionsHourMock: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' }
  const optionsDayMock: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
  }
  const codeCountryMock = 'AR'
  it('getHumanReadableTime function should return  hh:mm local time in string', () => {
    expect(getHumanReadableTime(timeMock, timeZoneOffsetMock, optionsHourMock)).toBe('9:28')
  })

  it('getHumanReadableTime function should return  long  local time  date in string format ', () => {
    expect(getHumanReadableTime(timeMock, timeZoneOffsetMock, optionsDayMock)).toBe(
      'martes, 7 de junio'
    )
  })

  it('getHumanReadableCountry function should return  a human readable text  country ', () => {
    expect(getHumanReadableCountry(codeCountryMock)).toBe('Argentina')
  })
})

export {}
