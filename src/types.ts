export enum NavAction {
  LINK,
  COMPONENT,
}

export interface NavButton {
  text: string;
  action: NavAction;
  url?: string;
  component?: any;
}

export interface Category {
  CategoryName: string;
  Os: ('windows' | 'linux')[];
}

export interface Optimization {
  Platform: ('windows' | 'linux')[];
  Category?: string;
  FunctionName: string;
  DisplayName: string;
  Description: string;
  Parameters: {
    Name: string;
    ParameterType: 'array' | 'string' | 'switch';
    IsMandatory: boolean;
    ValidValues: string[] | null;
  }[];
}
