export enum NavAction {
  LINK,
  ABOUT,
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
  _selected?: boolean;

  Name: string;
  Description: string;
  Parameters: {
    Type: 'Array' | 'String' | 'Switch';
    Name: string;
    KeyValues: { [key: string]: string };
    Description: string;
    ValidateSet?: string[];
    IsMandatory: boolean;
  }[];
  Path: string;
  'Display Name': string;
  Platform: ('windows' | 'linux')[];
  Category?: string;
}

// Not the full object but we only need those fields
export interface Commit {
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  html_url: string;
  sha: string;
}
