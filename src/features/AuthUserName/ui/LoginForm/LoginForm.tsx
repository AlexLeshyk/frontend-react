import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { TextTheme } from '@/shared/ui/Text/Text.model';
import { useAppDispatch } from '@/shared/hooks';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib';
import { Button, Input, Text } from '@/shared/ui';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import {
  getLoginError, getLoginIsLoading, getLoginPassword, getLoginUserName,
} from '../../model/selectors/authUserName';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';

import classes from './LoginForm.module.css';

export interface LoginFormProps {
  className?: string;
  onCLoseModal: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onCLoseModal } = props;
  const userName = useSelector(getLoginUserName);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((password: string) => {
    dispatch(loginActions.setPassword(password));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username: userName, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onCLoseModal();
    }
  }, [dispatch, userName, password, onCLoseModal]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div
        className={cx({
          [classes.wrapper]: true,
          [className as string]: className,
        })}
      >
        <Text title={t('AuthorizationForm')} className={classes.title} />
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
          type="password"
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
