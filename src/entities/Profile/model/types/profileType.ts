import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'incorrect_user_data',
    INCORRECT_AGE = 'incorrect_age',
    INCORRECT_CITY = 'incorrect_city',
    NO_DATA = 'not_data',
    SERVER_ERROR = 'server error',
}

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileModel {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: Array<ValidateProfileError>;
}
