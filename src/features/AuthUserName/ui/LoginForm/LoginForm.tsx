import cx from 'clsx';
import { Button, Input } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import classes from './LoginForm.module.css';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div
      className={cx({
        [classes.wrapper]: true,
        [className]: className,
      })}
    >
      <Input
        autofocus
        className={classes.input}
        label={t('userName')}
        placeholder={t('enterUsername')}
        // eslint-disable-next-line i18next/no-literal-string
        htmlFor="userName"
      />
      <Input
        className={classes.input}
        label={t('password')}
        placeholder={t('enterText')}
        // eslint-disable-next-line i18next/no-literal-string
        htmlFor="password"
      />
      <Button className={classes.loginBtn}>{t('Login')}</Button>
    </div>
  );
};
