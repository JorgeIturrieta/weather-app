import { fireEvent, render, screen } from '@testing-library/react'
import WeatherSelector from './WeatherSelector'
import { weatherSelectorMock } from './WeatherSelectorMock'

describe('<WeatherSelector />', () => {
  it('When the User change the  city should render a new Weather', () => {
    const { getByRole, getAllByTestId } = render(
      <WeatherSelector currentWeather={weatherSelectorMock} />
    )
    let options = getAllByTestId('select-option') as HTMLOptionElement[]

    // the initial state should be -1

    expect(options[0].selected).toBeTruthy() // value -1
    expect(options[1].selected).toBeFalsy() // value 0
    expect(options[2].selected).toBeFalsy() // value 1
    expect(options[3].selected).toBeFalsy() // value 2

    // The user selects Chicago- Estados Unidos
    fireEvent.change(getByRole('combobox'), { target: { value: 2 } })

    expect(options[0].selected).toBeFalsy() // value -1
    expect(options[1].selected).toBeFalsy() // value 0
    expect(options[2].selected).toBeFalsy() // value 1
    expect(options[3].selected).toBeTruthy() // value 2

    // Should rendered a Wheater component of the select city
    const mainHeading = screen.getByRole('heading', { name: /pronóstico para hoy/i })
    const currentCity = screen.getByRole('heading', {
      name: /miércoles, 8 de junio en chicago, estados unidos/i,
    })
    expect(mainHeading).toBeInTheDocument()
    expect(currentCity).toBeInTheDocument()
  })
})
