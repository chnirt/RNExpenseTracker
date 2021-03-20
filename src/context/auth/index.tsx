import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

import {IAuthProvider, IAuthContext, IUser} from './types';

const AuthContext = createContext<IAuthContext>({
  initializing: true,
  isAuth: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({children}: IAuthProvider) => {
  const [initializing, setInitializing] = useState(true);
  const [isAuth, setIsAuth] = useState(true);
  const {
    getItem: getToken,
    setItem: setToken,
    removeItem: removeToken,
  } = useAsyncStorage('@access_token');

  const login = async (user: IUser, token: string) => {
    setToken(token);
    setIsAuth(true);
    return true;
  };

  const logout = async () => {
    await removeToken();
    setIsAuth(false);
  };

  const fetchToken = async () => {
    const token = await getToken();
    setIsAuth(!!token);
    setInitializing(false);
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      fetchToken();
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={{initializing, isAuth, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
