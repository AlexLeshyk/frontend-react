import cx from 'clsx';
import { Button, Input, Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthUserName/model/slice/loginSlice';
import { TextTheme } from 'shared/ui/Text/Text.model';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';

import classes from './LoginForm.module.css';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const userName = useSelector(getLoginUserName);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((password: string) => {
    dispatch(loginActions.setPassword(password));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username: userName, password }));
  }, [dispatch, userName, password]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
          value={userName}
        />
        <Input
          className={classes.input}
          label={t('password')}
          placeholder={t('enterText')}
          htmlFor={t('password')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={classes.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
