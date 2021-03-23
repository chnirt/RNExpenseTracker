import {ReactNode} from 'react';

export interface ICalendarContext {
  calendarStart: Date | null;
  calendarEnd: Date | null;
  handleOpen: () => void;
}
export interface ICalendarProvider {
  children: ReactNode;
}
