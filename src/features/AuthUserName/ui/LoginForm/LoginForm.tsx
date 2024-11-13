import cx from 'clsx';
import { Button, Input, Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthUserName/model/slice/loginSlice';
import { TextTheme } from 'shared/ui/Text/Text.model';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';

import classes from './LoginForm.module.css';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const loginForm = useSelector(getLoginState);
  const { error } = loginForm;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((password: string) => {
    dispatch(loginActions.setPassword(password));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username: loginForm.userName, password: loginForm.password }));
  }, [dispatch, loginForm]);

  return (
    <div
      className={cx({
        [classes.wrapper]: true,
        [className]: className,
      })}
    >
      <Text title={t('AuthorizationForm')} />
      {error && <Text theme={TextTheme.ERROR} text={t('Incorrect login password')} />}
      <Input
        autofocus
        className={classes.input}
        label={t('userName')}
        placeholder={t('enterUsername')}
        htmlFor={t('userName')}
        onChange={onChangeUsername}
        value={loginForm.userName}
      />
      <Input
        className={classes.input}
        label={t('password')}
        placeholder={t('enterText')}
        htmlFor={t('password')}
        onChange={onChangePassword}
        value={loginForm.password}
      />
      <Button
        className={classes.loginBtn}
        onClick={onLoginClick}
        disabled={loginForm.isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  );
});
