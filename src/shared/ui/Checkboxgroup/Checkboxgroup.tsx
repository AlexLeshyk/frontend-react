import { memo, useState } from 'react';
import classes from './Checkboxgroup.module.css';

interface CheckboxGroupProps<T extends string> {
  options: T[];
  onChangeCheckbox?: (checkedItems: { [key in T]: boolean }) => void;
}

const CheckboxGroupComponent = <T extends string>({ options, onChangeCheckbox }: CheckboxGroupProps<T>) => {
  const initialCheckedItems = options.reduce<{ [key in T]: boolean }>((acc, option) => {
    acc[option] = false;
    return acc;
  }, {} as { [key in T]: boolean });

  const [checkedItems, setCheckedItems] = useState<{ [key in T]: boolean }>(initialCheckedItems);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const updatedCheckedItems = {
      ...checkedItems,
      [name as T]: checked,
    };
    setCheckedItems(updatedCheckedItems);

    if (onChangeCheckbox) {
      onChangeCheckbox(updatedCheckedItems);
    }
  };

  return (
    <div className={classes.wrapper}>
      {options.map((option) => (
        <label key={option} className={classes.label}>
          <input
            type="checkbox"
            name={option}
            checked={checkedItems[option]}
            onChange={handleCheckboxChange}
            className={classes.input}
          />
          <span className={classes.option}>{option}</span>
        </label>
      ))}
    </div>
  );
};

export const CheckboxGroup = memo(CheckboxGroupComponent) as typeof CheckboxGroupComponent;
