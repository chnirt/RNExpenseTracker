import {ReactNode} from 'react';

export interface IMyButton {
  children: ReactNode;
  onPress?: (() => void) | undefined;
  primary?: boolean;
}
