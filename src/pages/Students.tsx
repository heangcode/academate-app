import React from "react";
import { Typography } from "@mui/material";
import Layout from "../components/Layout";

const Students: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h4">Students</Typography>
      <Typography>Manage your students here.</Typography>
    </Layout>
  );
};

export default Students;
