import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  test('only input', () => {
    componentRender(<Input />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });
});
