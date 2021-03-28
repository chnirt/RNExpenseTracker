import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

import {IOnboardingContext, IOnboardingProvider} from './type';

const OnboardingContext = createContext<IOnboardingContext>({
  isViewed: false,
  skip: () => {},
});

export const OnboardingProvider = ({children}: IOnboardingProvider) => {
  const [isViewed, setViewed] = useState(false);
  const {
    getItem: getViewedOnboarding,
    setItem: setViewedOnboarding,
    removeItem: removeViewedOnboarding,
  } = useAsyncStorage('@viewed_onboarding');

  const checkOnboarding = async () => {
    const viewedOnboarding = await getViewedOnboarding();
    viewedOnboarding && setViewed(true);
  };

  useLayoutEffect(() => {
    checkOnboarding();
  }, []);

  const skip = () => {
    // setViewedOnboarding('true');
  };

  return (
    <OnboardingContext.Provider
      value={{
        isViewed,
        skip,
      }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);
