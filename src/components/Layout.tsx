import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Link,
  List,
  ListItemText,
  Divider,
  ListItemButton,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Class as ClassIcon,
  People as PeopleIcon,
  EventNote as EventNoteIcon,
  Assessment as AssessmentIcon,
  CalendarToday as CalendarTodayIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const getListItemStyles = (path: string) => ({
    bgcolor: isActive(path) ? "#e6f6fc" : "#fff",
    color: isActive(path) ? "#3BB2D9" : "#000",
    fontWeight: isActive(path) ? "600" : "400",
    "&:hover": {
      bgcolor: "#e6f6fc",
      color: "#3BB2D9",
    },
  });

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: "250px",
          bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
          boxShadow: "0 0 20px rgba(59, 178, 217, 0.25)",
        }}
      >
        <Box>
          <img
            src="/academate-logo.png"
            alt="academate-logo"
            width={100}
            style={{ marginBottom: "20px" }}
          />
          <List>
            <ListItemButton
              onClick={() => navigate("/dashboard")}
              selected={isActive("/dashboard")}
              sx={getListItemStyles("/dashboard")}
            >
              <ListItemIcon
                sx={{ color: isActive("/dashboard") ? "#3BB2D9" : "#000" }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/classes")}
              selected={isActive("/classes")}
              sx={getListItemStyles("/classes")}
            >
              <ListItemIcon
                sx={{ color: isActive("/classes") ? "#3BB2D9" : "#000" }}
              >
                <ClassIcon />
              </ListItemIcon>
              <ListItemText primary="Classes" />
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/students")}
              selected={isActive("/students")}
              sx={getListItemStyles("/students")}
            >
              <ListItemIcon
                sx={{ color: isActive("/students") ? "#3BB2D9" : "#000" }}
              >
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Students" />
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/attendance")}
              selected={isActive("/attendance")}
              sx={getListItemStyles("/attendance")}
            >
              <ListItemIcon
                sx={{ color: isActive("/attendance") ? "#3BB2D9" : "#000" }}
              >
                <EventNoteIcon />
              </ListItemIcon>
              <ListItemText primary="Attendance" />
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/score")}
              selected={isActive("/score")}
              sx={getListItemStyles("/score")}
            >
              <ListItemIcon
                sx={{ color: isActive("/score") ? "#3BB2D9" : "#000" }}
              >
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Score" />
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/calendar")}
              selected={isActive("/calendar")}
              sx={getListItemStyles("/calendar")}
            >
              <ListItemIcon
                sx={{ color: isActive("/calendar") ? "#3BB2D9" : "#000" }}
              >
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
            <ListItemButton
              onClick={() => navigate("/settings")}
              selected={isActive("/settings")}
              sx={getListItemStyles("/settings")}
            >
              <ListItemIcon
                sx={{ color: isActive("/settings") ? "#3BB2D9" : "#000" }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>
        </Box>
        <Box>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItemButton>
        </Box>
      </Box>
      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#ebf7fb",
          overflowY: "auto",
        }}
      >
        {/* Top Navbar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#fff",
            p: 2,
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box>
            <Typography variant="h6">Welcome, Boran</Typography>
            <Link
              href="#"
              onClick={() => navigate("/profile")}
              sx={{ display: "block", mt: 1 }}
            >
              Lecturer &gt; TIPLR Education Pvt. Ltd.
            </Link>
          </Box>
          <Box display="flex" alignItems="center">
            <input
              type="text"
              placeholder="Search Dashboard"
              style={{
                padding: "8px",
                borderRadius: "24px",
                border: "1px solid #ddd",
                marginRight: "16px",
              }}
            />
            <Avatar
              alt="Boran Pol"
              src="/path-to-avatar.jpg"
              sx={{ marginRight: 2 }}
            />
            <Box>
              <Typography variant="body1">Boran Pol</Typography>
              <Typography variant="body2">boranpol@mail.com</Typography>
            </Box>
          </Box>
        </Box>
        {/* Content */}
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
