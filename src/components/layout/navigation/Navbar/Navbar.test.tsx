import { render, screen } from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('it renders Navbar component', () => {
    render(<Navbar />);

    expect(screen.getByText(/artsy/)).toBeInTheDocument();
  });
});
