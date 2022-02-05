export interface ISelect {
  name: string;
  index: number;
  isCollapse: boolean;
  options: string[];
  selectedOption: null | string;
}
