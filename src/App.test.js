import { render, screen } from './testing-utils';

import App from './App';

test('Renders title', () => {
  render(
        <App/>
    );
  const title = screen.getByText(/Fetch/i);
  expect(title).toBeInTheDocument();
});
