import {ReactNode} from 'react';

export interface ICategoriesProvider {
  children: ReactNode;
}

export interface ICategoriesContext {
  value: string | null;
  handleOpen: () => void;
  handleClose: () => void;
}
