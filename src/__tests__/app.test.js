import { render, screen, waitFor, cleanup } from '@testing-library/react';
import App from '../App';
// import axiosMock from 'axios'
import userEvent from '@testing-library/user-event'
// import vehicleAPIResponse from '../__mocks__/vehicle.json'
// import flightAPIResponse from '../__mocks__/plane.json'
// import electricityAPIResponse from '../__mocks__/electricity.json'


afterEach(cleanup)

describe('App loads',() => {

  test('searchbar is displayed on the screen', () => {
    render(<App />)
    const input = screen.getByLabelText(/Search/i)
    expect(input).toBeInTheDocument()
  });
  xtest('Car and CarEmissionForms are connected', async () => {
    render(<App />)
    const input = screen.getByLabelText(/Search/i)
    userEvent.type(input, 'Hello')
    expect(input).toHaveValue('Hello')
    userEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(/Search/)).toBeInTheDocument()
    screen.debug()
  });

});