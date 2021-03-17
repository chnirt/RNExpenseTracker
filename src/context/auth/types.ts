import React from 'react';

export interface IAuthProvider {
  children: React.ReactNode;
}

export interface IAuthContext {
  initializing: boolean;
  isAuth: boolean;
  login: (user: IUser, token: string) => void;
  logout: () => void;
}

export interface IUser {}
