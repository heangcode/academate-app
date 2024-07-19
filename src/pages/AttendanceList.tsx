import { FilterAlt, GetApp } from "@mui/icons-material";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import StudentTable from "../components/StudentTable";
import AttendanceReportDialog from "../components/AttendanceReportDialog";
import { students } from "../data/StudentsData";

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

const AttendanceList = () => {
  const [value, setValue] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      {/* Attendance */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="#434343" fontSize="20px">
          Attendance Details
        </Typography>

        <Box display="flex" gap={2}>
          <Button
            variant="outlined"
            startIcon={<FilterAlt />}
            sx={{
              textTransform: "none",
              bgcolor: "#C8E4FA",
              color: "#0D6DC5",
            }}
          >
            Filter
          </Button>
          <Button
            variant="outlined"
            startIcon={<GetApp />}
            sx={{
              textTransform: "none",
              bgcolor: "#3BB2D9",
              color: "white",
            }}
          >
            Export Data
          </Button>
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={{ textTransform: "none" }} label="Attendance" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <StudentTable
          students={students}
          actions={["view", "attendance"]}
          onClickAttendance={handleOpenDialog}
        />
      </TabPanel>

      {/* Attendance Report Dialog */}
      <AttendanceReportDialog open={dialogOpen} onClose={handleCloseDialog} />
    </div>
  );
};

export default AttendanceList;
