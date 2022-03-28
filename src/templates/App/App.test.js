import { render, screen } from '@testing-library/react';
import Home from '.';

import { renderTheme } from '../../utils/renderTheme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);

  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;

  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('color', '#0F0');
});
