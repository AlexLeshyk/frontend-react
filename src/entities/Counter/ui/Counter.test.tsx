import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('text value in title counter', () => {
    componentRender(<Counter />, {
      initalState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('header-value')).toHaveTextContent('10');
  });

  test('increment', () => {
    componentRender(<Counter />, {
      initalState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('button-increment'));
    expect(screen.getByTestId('header-value')).toHaveTextContent('11');
  });

  test('decrement', () => {
    componentRender(<Counter />, {
      initalState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('button-decrement'));
    expect(screen.getByTestId('header-value')).toHaveTextContent('9');
  });
});
