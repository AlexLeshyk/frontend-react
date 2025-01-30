import { createSelector } from '@reduxjs/toolkit';
import { StateModel } from 'app/providers/StoreProvider';
import { UserRole } from '../types/userModel';

export const getUserRoles = (state: StateModel) => state?.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
