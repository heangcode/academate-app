import React from "react";
import { Typography } from "@mui/material";
import Layout from "../components/Layout";

const Attendance: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h4">Attendance</Typography>
      <Typography>Track student attendance here.</Typography>
    </Layout>
  );
};

export default Attendance;
