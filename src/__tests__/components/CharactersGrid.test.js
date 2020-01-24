import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import reducer, { INITIAL_STATE } from 'store/reducers';
import CharactersGrid from 'components/CharactersGrid';

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, INITIAL_STATE) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}


describe('<CharactersGrid/>', () => {
  afterEach(cleanup);
  test('renders a grid of characters cards', () => {
    const character = {
      id: '123456',
      name: 'Iron Man',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        extension: 'jpg',
      },
    };
    const history = createMemoryHistory();
    const { container, getByText } = renderWithRedux(
      <Router history={history}>
        <CharactersGrid characters={[character]} />
      </Router>,
    );
    const linkElement = getByText(/Iron Man/i);
    expect(linkElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
