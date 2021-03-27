export interface IOnboardingProvider {
  children: React.ReactNode;
}

export interface IOnboardingContext {
  isViewed: boolean;
  skip: () => void;
}
