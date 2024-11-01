import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Modal } from './Modal';

describe('Siderbar', () => {
  test('only modal', () => {
    componentRender(<Modal />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  test('modal has class opened', () => {
    componentRender(<Modal isOpen>Test</Modal>);
    expect(screen.getByTestId('modal')).toHaveClass('opened');
  });
});
