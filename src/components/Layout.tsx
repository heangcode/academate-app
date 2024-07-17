import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Avatar,
  Stack,
  InputBase,
  Badge,
  IconButton,
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
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  ChatBubble as ChatBubbleIcon,
  ExpandMore as ExpandMoreIcon,
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
            width={123}
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
            <Typography variant="h6">Welcome Boran</Typography>
            <Stack direction="row" spacing={1}>
              <Typography color="primary">Lecturer</Typography>
              <Typography>&gt;</Typography>
              <Typography>TIPLR Education Pvt. Ltd.</Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#f5f6f7",
              borderRadius: "8px",
              padding: "8px 16px",
              width: "400px",
              height: "62px",
            }}
          >
            <SearchIcon sx={{ color: "#888" }} />
            <InputBase
              placeholder="Search Dashboard"
              sx={{
                marginLeft: "12px",
                flex: 1,
                color: "#333",
                "::placeholder": {
                  color: "#888",
                },
              }}
            />
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Stack direction="row" spacing={1}>
              <IconButton>
                <Badge color="primary" variant="dot">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <ChatBubbleIcon />
              </IconButton>
            </Stack>
            <Box display="flex" alignItems="center">
              <Avatar
                alt="Boran Pol"
                src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                sx={{ marginRight: 2 }}
              />
              <Box>
                <Typography variant="body1">Boran Pol</Typography>
                <Typography variant="body2">boranpol@mail.com</Typography>
              </Box>
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
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
