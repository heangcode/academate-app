import React, { useState } from "react";
import { Box, Typography, Button, Tabs, Tab } from "@mui/material";
import {
  FilterList as FilterListIcon,
  GetApp as GetAppIcon,
} from "@mui/icons-material";
import Layout from "../components/Layout";
import {
  rejectedStudents,
  studentRequests,
  students,
} from "../data/StudentsData";
import { StudentTable } from "../components";

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

const Students: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
          Students
        </Typography>
        <Typography
          variant="body1"
          color="#919499"
          fontSize="16px"
          sx={{ mb: 2 }}
        >
          Manage and organize students
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 3 }}
        >
          <Typography variant="h6" color="#434343" fontSize="20px">
            Student Details
          </Typography>
          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              startIcon={<FilterListIcon />}
              sx={{ textTransform: "none" }}
            >
              Filter
            </Button>
            <Button
              variant="outlined"
              startIcon={<GetAppIcon />}
              sx={{ textTransform: "none" }}
            >
              Export Data
            </Button>
          </Box>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="student tabs">
            <Tab label="Student" />
            <Tab label="Student request" />
            <Tab label="Rejected student" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <StudentTable students={students} actions={["view"]} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <StudentTable
            students={studentRequests}
            actions={["accept", "reject"]}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <StudentTable
            students={rejectedStudents}
            actions={["accept", "reject"]}
          />
        </TabPanel>
      </Box>
    </Layout>
  );
};

export { Students };
