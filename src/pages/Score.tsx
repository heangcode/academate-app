import React, { useState } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import Layout from "../components/Layout";
import { FilterAlt, GetApp } from "@mui/icons-material";
import { ScoreTableData } from "../data/ScoreTableData";
import { ScoreTable } from "../components";

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

const Score: React.FC = () => {
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
          Student score
        </Typography>
        <Typography
          variant="body1"
          color="#919499"
          fontSize="16px"
          sx={{ mb: 2 }}
        >
          Manage and organize students
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" color="#434343" fontSize="20px">
            Score Details
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

        <Box sx={{ borderBottom: 1, borderColor: "divider" }} mt="36px">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab sx={{ textTransform: "none" }} label="Student" />
            <Tab sx={{ textTransform: "none" }} label="Course score" />
            <Tab sx={{ textTransform: "none" }} label="Scores" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <ScoreTable students={ScoreTableData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>Course Score</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>Scores</Typography>
        </TabPanel>
      </Box>
    </Layout>
  );
};

export { Score };
