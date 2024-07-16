import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";

const Calendar: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h4">Calendar</Typography>
      <Typography>View the academic calendar here.</Typography>
    </Layout>
  );
};

export default Calendar;
