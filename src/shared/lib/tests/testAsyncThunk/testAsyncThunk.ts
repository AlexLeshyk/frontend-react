import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateModel } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> =
(arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.MockedFn<any>;

  dispatch: jest.MockedFn<any>;

  getState: () => StateModel;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.navigate = jest.fn();

    this.api = mockedAxios;
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(
      this.dispatch,
      this.getState,
      { api: this.api, navigate: this.navigate },
    );

    return result;
  }
}
