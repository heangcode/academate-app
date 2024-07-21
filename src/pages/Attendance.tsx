import React, { useState } from "react";
import { Box, Grid, InputBase, Tab, Tabs, Typography } from "@mui/material";
import Layout from "../components/Layout";
import { Search } from "@mui/icons-material";
import { classes } from "../data/ClassesData";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ClassCard } from "../components";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Attendance: React.FC = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleAttendanceClick = () => {
    navigate("attendance-list"); // Redirect to the nested route
  };

  return (
    <Layout>
      <Box>
        <Typography
          variant="h4"
          color="#055D7A"
          fontSize="26px"
          fontWeight="bold"
        >
          Attendance
        </Typography>
        <Typography
          variant="body1"
          color="#919499"
          fontSize="16px"
          sx={{ mb: 2 }}
        >
          Manage and organize attendance students
        </Typography>

        {/* Conditionally render the classes section */}
        {location.pathname === "/attendance" && (
          <Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6" color="#434343" fontSize="20px">
                Attendance Details
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                mb={3}
                sx={{
                  width: "379px",
                  height: "40px",
                  bgcolor: "#F1F1F1",
                  borderRadius: "5px",
                }}
              >
                <Search sx={{ color: "gray", ml: 1 }} />
                <InputBase placeholder="Search..." sx={{ ml: 1, flex: 1 }} />
              </Box>
            </Box>

            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab sx={{ textTransform: "none" }} label="Classes" />
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <Grid container spacing={2}>
                {classes.map((cls) => (
                  <Grid item xs={12} sm={6} md={4} key={cls.id}>
                    <ClassCard
                      title={cls.title}
                      classroom={cls.classroom}
                      time={cls.time}
                      date={cls.date}
                      status={cls.status}
                      onClick={handleAttendanceClick}
                    />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          </Box>
        )}

        {/* Nested Routes */}
        <Outlet />
      </Box>
    </Layout>
  );
};

export { Attendance };
