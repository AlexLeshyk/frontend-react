const interfaceConst = "interface";

module.exports = (componentName) => `import cx from 'clsx';
import { memo } from 'react';
import classes from './${componentName}.module.css';

${interfaceConst} ${componentName}Props {
  className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
  const { className } = props;

  return (
    <div className={cx({ [classes.wrapper]: true, [className as string]: className })}>
      content  
    </div>
  );
});`;
