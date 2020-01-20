import React from 'react';
import { render } from '@testing-library/react';
import Main from 'pages/Main';

describe('Main', () => {
  test('renders Hello World', () => {
    const { getByText } = render(<Main />);
    const linkElement = getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });
});
