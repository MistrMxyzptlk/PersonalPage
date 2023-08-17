interface ILink {
  label: string;
  link: string;
}

export interface ISideBar {
  open: boolean;
  links: ILink[];
}

export interface ISidebarState {
  left: ISideBar;
  right: ISideBar;
}

export enum ESideBars {
  Left = 'left',
  Right = 'right',
}

export const defaultSidebarState: ISidebarState = {
  left: {
    links: [],
    open: false,
  },
  right: {
    links: [],
    open: false,
  }
}
