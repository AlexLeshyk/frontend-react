import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  test('only textarea', () => {
    componentRender(<Textarea />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
  });
});
