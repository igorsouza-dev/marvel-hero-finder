import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterCard from 'components/CharacterCard';

describe('CharacterCard', () => {
  afterEach(cleanup);
  test('renders a hero card', () => {
    const character = {
      id: 123456,
      name: 'Iron Man',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        extension: 'jpg',
      },
    };
    const { container, getByText } = render(<CharacterCard character={character} />);
    const linkElement = getByText(/Iron Man/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
