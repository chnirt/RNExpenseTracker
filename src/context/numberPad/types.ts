import {ReactNode} from 'react';

export interface INumberPadProvider {
  children: ReactNode;
}

export interface INumberPadContext {
  value: string | null;
  handleOpen: () => void;
  handleClose: () => void;
}
