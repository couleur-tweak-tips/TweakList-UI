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
  Os: ("windows" | "linux")[];
}

export interface Optimization {
  _selected?: boolean;
  Platform: ("windows" | "linux")[];
  Category?: string;
  FunctionName: string;
  DisplayName: string;
  FilePath: string;
  Description: string;
  Parameters: {
    Name: string;
    ParameterType: "array" | "string" | "switch";
    IsMandatory: boolean;
    ValidValues?: string[];
  }[];
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
