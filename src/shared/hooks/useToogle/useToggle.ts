import { useCallback, useState } from 'react';

export const useToggle = (initialValue: boolean): [boolean, () => void, () => void, () => void] => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  const open = useCallback(() => {
    setValue(true);
  }, []);

  const close = useCallback(() => {
    setValue(false);
  }, []);
  return [value, toggle, close, open];
};
