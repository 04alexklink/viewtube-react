import { render, screen } from '@testing-library/react';
import App from './App';


describe('when app first loads', () => {
  test('search bar is visible to the user', () => {
    render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
    screen.debug();
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByText('Please enter a search above')).toBeInTheDocument()
  });
  // video container and video list items are not shown on the screen
})
