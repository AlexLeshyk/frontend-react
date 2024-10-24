import { classNames } from './classNames';

describe('classNames', () => {
  test('with class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    const expectedClass = 'someClass classA classB';
    expect(classNames('someClass', {}, ['classA', 'classB'])).toBe(expectedClass);
  });

  test('with mods', () => {
    const expectedClass = 'someClass classA classB hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['classA', 'classB'],
    )).toBe(expectedClass);
  });

  test('with mods false', () => {
    const expectedClass = 'someClass classA classB hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['classA', 'classB'],
    )).toBe(expectedClass);
  });

  test('with mods undefined', () => {
    const expectedClass = 'someClass classA classB hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['classA', 'classB'],
    )).toBe(expectedClass);
  });
});
