import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Collapse,
  Badge,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Work as ProjectsIcon,
  ShoppingCart as OrdersIcon,
  Inventory as ProductsIcon,
  Receipt as InvoicesIcon,
  Task as TasksIcon,
  CalendarMonth as CalendarIcon,
  Apps as ComponentsIcon,
  ShowChart as ChartsIcon,
  Assignment as FormsIcon,
  TableRows as TablesIcon,
  Palette as IconsIcon,
  Map as MapsIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { MenuItem, SubMenuItem } from "../types/sidebar";

interface StyledListItemProps {
  $active: boolean;
}

const StyledSidebar = styled.aside`
  color: #fff;
  background-color: #fff;
  /* background-color: #243147; */
  background-color: #233043;
  overflow: auto;
  scrollbar-width: none;
  /* padding: 1rem 1rem; */
  border-right: 1px solid #f3f4f6;
  grid-row: 1/-1;
  /* width: 240px; */
`;

// const SearchField = styled.input`
//     margin: 10px;
//     height: 30px;
//     width: 90%;
//     padding: 10px;
//     outline: none;
//     padding: 5px;
//     border: none;
//     &:focus {
//         outline: none;
//         border: none;
//     }
// `;

// const SearchContainer = styled.div`
//     display: flex;
//     align-items: center;
//     &:hover {
//         background-color: #dbd8d8d5;
//     }
//     &:hover > ${SearchField} {
//         background-color: #dbd8d8d5;
//     }
// `;
const StyledListItem = styled(ListItem)<StyledListItemProps>`
  color: #fff;
  /* color: ${(props) => (props.$active ? "#000" : "#666")}; */
  background-color: ${(props) => (props.$active ? "" : "")};
  &:hover {
    background-color: #172234;
  }
`;

const StyledList = styled(List)`
  margin-top: 2rem;
`;

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dashboardOpen, setDashboardOpen] = useState<boolean>(true);
  const [pagesOpen, setPagesOpen] = useState<boolean>(false);
  const [invoicesOpen, setInvoicesOpen] = useState<boolean>(false);
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const [componentsOpen, setComponentsOpen] = useState<boolean>(false);
  const [chartsOpen, setChartsOpen] = useState<boolean>(false);
  const [formsOpen, setFormsOpen] = useState<boolean>(false);
  const [tablesOpen, setTablesOpen] = useState<boolean>(false);
  const [iconsOpen, setIconsOpen] = useState<boolean>(false);
  const [mapsOpen, setMapsOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      path: "/dashboard",
      submenu: [
        { title: "Default", path: "/dashboard" },
        { title: "Analytics", path: "/dashboard/analytics" },
        { title: "SaaS", path: "/dashboard/saas" },
      ],
    },
    {
      title: "Pages",
      icon: <DashboardIcon />,
      path: "/pages",
      submenu: [
        { title: "Profile", path: "/pages/profile" },
        { title: "Settings", path: "/pages/settings" },
        { title: "Pricing", path: "/pages/pricing" },
        { title: "Chat", path: "/pages/chat" },
        { title: "Blank", path: "/pages/blank" },
      ],
    },
    {
      title: "Projects",
      icon: <ProjectsIcon />,
      path: "/projects",
      badge: 8,
    },
    {
      title: "Orders",
      icon: <OrdersIcon />,
      path: "/orders",
    },
    {
      title: "Products",
      icon: <ProductsIcon />,
      path: "/products",
    },
    {
      title: "Invoices",
      icon: <InvoicesIcon />,
      path: "/invoices",
      submenu: [
        { title: "List", path: "/invoices/list" },
        { title: "Detail", path: "/invoices/detail" },
      ],
    },
    {
      title: "Tasks",
      icon: <TasksIcon />,
      path: "/tasks",
      badge: 17,
    },
    {
      title: "Calendar",
      icon: <CalendarIcon />,
      path: "/calendar",
    },
    {
      title: "Auth",
      icon: <DashboardIcon />,
      path: "/auth",
      submenu: [
        { title: "Sign In", path: "/auth/sign-in" },
        { title: "Sign In Cover", path: "/auth-cover/sign-in" },
        { title: "Sign Up", path: "/auth/sign-up" },
        { title: "Sign Up Cover", path: "/auth-cover/sign-up" },
        { title: "Reset Password", path: "/auth/reset-password" },
        { title: "Reset Password Cover", path: "/auth-cover/reset-password" },
        { title: "404 Page", path: "/error/404" },
        { title: "500 Page", path: "/error/500" },
      ],
    },
    {
      title: "Components",
      icon: <ComponentsIcon />,
      path: "/components",
      submenu: [
        { title: "Buttons", path: "" },
        { title: "Forms", path: "" },
        { title: "Tables", path: "" },
        { title: "Cards", path: "" },
      ],
    },
    {
      title: "Charts",
      icon: <ChartsIcon />,
      path: "/charts",
      submenu: [
        { title: "Line Charts", path: "" },
        { title: "Bar Charts", path: "" },
        { title: "Pie Charts", path: "" },
        { title: "Scatter Charts", path: "" },
      ],
    },
    {
      title: "Forms",
      icon: <FormsIcon />,
      path: "/forms",
      submenu: [
        { title: "Basic Forms", path: "" },
        { title: "Advanced Forms", path: "" },
        { title: "Validation", path: "" },
      ],
    },
    {
      title: "Tables",
      icon: <TablesIcon />,
      path: "/tables",
      submenu: [
        { title: "Basic Tables", path: "" },
        { title: "Advanced Tables", path: "" },
      ],
    },
    {
      title: "Icons",
      icon: <IconsIcon />,
      path: "/icons",
      submenu: [
        { title: "Material Icons", path: "" },
        { title: "Font Awesome", path: "" },
        { title: "Custom Icons", path: "" },
      ],
    },
    {
      title: "Maps",
      icon: <MapsIcon />,
      path: "/maps",
      submenu: [
        { title: "Google Maps", path: "" },
        { title: "Leaflet Maps", path: "" },
      ],
    },
  ];

  const handleNavigate = (path: string): void => {
    navigate(path);
  };

  const renderSubmenu = (submenu: SubMenuItem[]): React.ReactNode => {
    return submenu.map((item) => (
      <StyledListItem
        key={item.path}
        $active={location.pathname === item.path}
        disablePadding
        sx={{ pl: 4 }}
      >
        <ListItemButton onClick={() => handleNavigate(item.path)}>
          <ListItemText
            primary={item.title}
            sx={{
              "& .MuiListItemText-primary": {
                fontSize: "0.875rem",
                fontWeight: location.pathname === item.path ? 600 : 400,
              },
            }}
          />
        </ListItemButton>
      </StyledListItem>
    ));
  };

  return (
    <StyledSidebar>
      <Logo />

      <StyledList>
        {menuItems.map((item) => (
          <React.Fragment key={item.path}>
            <StyledListItem
              $active={location.pathname.startsWith(item.path)}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  if (item.submenu) {
                    if (item.title === "Dashboard") {
                      setDashboardOpen(!dashboardOpen);
                    } else if (item.title === "Pages") {
                      setPagesOpen(!pagesOpen);
                    } else if (item.title === "Invoices") {
                      setInvoicesOpen(!invoicesOpen);
                    } else if (item.title === "Auth") {
                      setAuthOpen(!authOpen);
                    } else if (item.title === "Components") {
                      setComponentsOpen(!componentsOpen);
                    } else if (item.title === "Charts") {
                      setChartsOpen(!chartsOpen);
                    } else if (item.title === "Forms") {
                      setFormsOpen(!formsOpen);
                    } else if (item.title === "Tables") {
                      setTablesOpen(!tablesOpen);
                    } else if (item.title === "Icons") {
                      setIconsOpen(!iconsOpen);
                    } else if (item.title === "Maps") {
                      setMapsOpen(!mapsOpen);
                    }
                  } else {
                    handleNavigate(item.path);
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    color: location.pathname.startsWith(item.path)
                      ? "white"
                      : "white",
                    minWidth: "40px",
                  }}
                >
                  {item.badge ? (
                    <Badge badgeContent={item.badge} color="primary">
                      {item.icon}
                    </Badge>
                  ) : (
                    item.icon
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "0.875rem",
                      fontWeight: location.pathname.startsWith(item.path)
                        ? 600
                        : 400,
                    },
                  }}
                />
                {item.submenu &&
                  (item.title === "Dashboard" ? (
                    dashboardOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : item.title === "Pages" ? (
                    pagesOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : item.title === "Invoices" ? (
                    invoicesOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : item.title === "Auth" ? (
                    authOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : item.title === "Components" ? (
                    componentsOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : item.title === "Charts" ? (
                    chartsOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : item.title === "Forms" ? (
                    formsOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : item.title === "Tables" ? (
                    tablesOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : item.title === "Icons" ? (
                    iconsOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : item.title === "Maps" ? (
                    mapsOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null)}
              </ListItemButton>
            </StyledListItem>
            {item.submenu && (
              <Collapse
                in={
                  item.title === "Dashboard"
                    ? dashboardOpen
                    : item.title === "Pages"
                    ? pagesOpen
                    : item.title === "Invoices"
                    ? invoicesOpen
                    : item.title === "Auth"
                    ? authOpen
                    : item.title === "Components"
                    ? componentsOpen
                    : item.title === "Charts"
                    ? chartsOpen
                    : item.title === "Forms"
                    ? formsOpen
                    : item.title === "Tables"
                    ? tablesOpen
                    : item.title === "Icons"
                    ? iconsOpen
                    : item.title === "Maps"
                    ? mapsOpen
                    : false
                }
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {renderSubmenu(item.submenu)}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </StyledList>
      <User />
    </StyledSidebar>
  );
}

export default Sidebar;
////////////////////////////////
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import person from "../../public/avatar.jpg";

const User: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        backgroundColor: "#1e2a38",
        marginTop: "20px",
        padding: "10px",
      }}
    >
      <Avatar alt="Abdo Nawwar" src={person} sx={{ width: 56, height: 56 }} />
      <div>
        <p style={{ margin: "2px", color: "white" }}>John Doe</p>
        <p style={{ margin: "2px", color: "white" }}>UX Designer</p>
      </div>
    </Stack>
  );
};
