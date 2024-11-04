import { SvgIconComponent } from "@mui/icons-material";

export interface SubMenuItem {
  title: string;
  path: string;
}

export interface MenuItem {
  title: string;
  icon: React.ReactElement<SvgIconComponent>;
  path: string;
  badge?: number;
  submenu?: SubMenuItem[];
}
