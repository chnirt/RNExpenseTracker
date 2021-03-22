import {ReactNode} from 'react';

export interface ICalendarProvider {
  toggle?: () => {};
  children: ReactNode;
}
