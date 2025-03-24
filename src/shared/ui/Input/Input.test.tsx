import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Input } from './Input';

describe('Input', () => {
  test('only input', () => {
    componentRender(<Input />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });
});
