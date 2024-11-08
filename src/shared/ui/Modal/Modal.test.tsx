import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Modal } from './Modal';

describe('Modal', () => {
  test('only modal', () => {
    componentRender(<Modal>Content</Modal>);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  test('modal has class wrapper', () => {
    componentRender(<Modal>Content</Modal>);
    expect(screen.getByTestId('modal')).toHaveClass('wrapper');
  });
});
