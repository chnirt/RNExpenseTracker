import {ReactNode} from 'react';

export interface ICalendarContext {
  calendarStart: Date | null;
  calendarEnd: Date | null;
  toggle: () => void;
}
export interface ICalendarProvider {
  children: ReactNode;
}
