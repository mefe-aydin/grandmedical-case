export interface ICalendarData {
  q: string;
  isPinned: boolean;
  calendar: {
    name: string;
    q: string;
    days: number;
    isColored: boolean;
  }[];
}
