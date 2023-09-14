import { useState } from "react";
import { Menu, Sidebar, MenuItem, SubMenu } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { useSidebarContext } from "./sidebarContext";

import { Link } from "react-router-dom";
import { tokens } from "../../utils/theme";
import { useTheme, Box, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AcuityLogo from "../../assets/data/acuityLogo";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SubItem = ({ title, icon, selected, setSelected, subColection }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <SubMenu
      active={selected === title}
      style={{ color: colors.grey[100], backgroundColor: colors.primary[300] }}
      onClick={() => setSelected(title)}
      icon={icon}
      label={title}
      rootStyles={{
        color: colors.grey[100],
        backgroundColor: colors.primary[300]
      }}
    >
      {subColection.map(({ name, to }) => (
        <MenuItem
          routerLink={<Link to={to} />}
          styles={{
            color: colors.grey[100],
            backgroundColor: colors.primary[300]
          }}
        >
          {" "}
          {name}
        </MenuItem>
      ))}
    </SubMenu>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none"
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important"
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important"
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important"
        },
        "& .menu-item:not(.sub-menu):hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important"
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important"
        },
        "& .sub-menu-content ": {
          backgroundColor: `${colors.primary[400]} !important`
        },
        "& .sub-menu-content .menu-item": {
          padding: "0 35px 0 20px !important",
          backgroundColor: "transparent !important"
        },
        "& .sub-menu-content .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important"
        },
        "& .sub-menu-content .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important"
        },
        "& .sub-menu-content .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important"
        }
      }}
    >
      <Sidebar
        breakPoint="md"
        backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu iconshape="square">
          <MenuItem
            icon={
              collapsed && (
                <AcuityLogo
                  onClick={() => collapseSidebar()}
                  color={colors.grey[100]}
                />
              ) 
            }
            style={{
              margin: "10px 0 0px 0",
              color: colors.grey[100]
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                ml="5px"
              >
                <AcuityLogo
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                  color={colors.grey[100]}
                />
                <Typography variant="h3" color={colors.grey[100]} paddingLeft={collapsed ? undefined : "6%"}>
                  Blue Trade
                </Typography>
              </Box>
            )}
          </MenuItem>
         
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SubItem
              title="Projects"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              subColection={[
                { name: "Status Report", to: "/invoices" },
                { name: "Information", to: "/invoices" },
                { name: "Timeline", to: "/invoices" },
              ]}
            />
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
