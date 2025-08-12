export interface SidebarItem {
  icon?: string;
  title: string;
  type: string;
  url?: string;
  children?: SidebarItem[];
}

export interface SidebarSection {
  title: string;
  children: SidebarItem[];
}

export interface SidebarProps {
  menuEndpoint?: string;
  mainColor: string;
  textColor: string;
  pathname: string
}
