import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ButtonTheme } from './Button.model';

describe('Button', () => {
  test('only button', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('button with clear', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });

  test('button with primary', () => {
    render(<Button theme={ButtonTheme.PRIMARY}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('primary');
  });
});
