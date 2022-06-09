import { render, screen } from '@testing-library/react'
import { CurrentWeather } from './CurrentWeather'
import { weatherMock } from './CurrentWeatherMock'
describe('<CurrentWeather />', () => {
  it('Render CurrentWeather', async () => {
    render(<CurrentWeather data={weatherMock} />)

    const mainHeading = screen.getByRole('heading', { name: /pronóstico para hoy/i })
    const day = screen.getByRole('heading', {
      name: /miércoles, 8 de junio en villa krause, argentina/i,
    })
    const hour = screen.getByText('11:48 hs')
    const temperature = screen.getByText(/sensación termica: 13\.59°/i)
    expect(mainHeading).toBeInTheDocument()
    expect(day).toBeInTheDocument()
    expect(hour).toBeVisible()
    expect(temperature).toBeInTheDocument()
  })

  it('renders ForeCastWeather unchanged', () => {
    const { container } = render(<CurrentWeather data={weatherMock} />)
    expect(container).toMatchSnapshot()
  })
})
