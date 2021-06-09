import { render, screen, waitFor, cleanup } from '@testing-library/react';
import App from '../App';
// import axiosMock from 'axios'
import userEvent from '@testing-library/user-event'
// import vehicleAPIResponse from '../__mocks__/vehicle.json'
// import flightAPIResponse from '../__mocks__/plane.json'
// import electricityAPIResponse from '../__mocks__/electricity.json'


afterEach(cleanup)

describe('When Viewtube loads...',() => {

  test('the searchbar is displayed on the screen', () => {
    render(<App />)
    const searchBar = screen.getByLabelText(/Search/i)
    expect(searchBar).toBeInTheDocument()
  });
  test('the video component is not displayed on the screen', () => {
    render(<App />)
    const videoPlayer = screen.queryByTestId('videoiframe')
    expect(videoPlayer).toBeNull()
    screen.debug()
  });
  xtest('the video component is not displayed on the screen', async () => {
    render(<App />)
    userEvent.type(screen.getByRole('textbox'), 'cats')
    userEvent.click(screen.getByRole('button'))
    const videoPlayer = await screen.findByTestId('videoiframe')
    expect(videoPlayer).toBeInTheDocument()
    screen.debug()
  });

});