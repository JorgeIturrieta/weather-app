import { render, screen, within } from '@testing-library/react'
import ForeCastWeather from './ForeCastWeather'
import { weatherForecastMock } from './ForeCastWeatherMock'
describe('<ForecastWeather />', () => {
  it('Render ForecastWeather and should render only 5 items', async () => {
    render(<ForeCastWeather data={weatherForecastMock} />)

    const mainHeading = screen.getByRole('heading', { name: /pronóstico extendido/i })
    const containerDay = screen.getByTestId('list')
    const { getAllByTestId } = within(containerDay)
    const items = getAllByTestId('listitem')
    expect(mainHeading).toBeInTheDocument()
    expect(items.length).toBe(5)
  })

  it('renders ForeCastWeather unchanged', () => {
    const { container } = render(<ForeCastWeather data={weatherForecastMock} />)
    expect(container).toMatchSnapshot()
  })
})
