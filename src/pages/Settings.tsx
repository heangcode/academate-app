import React from "react";
import { Typography } from "@mui/material";
import Layout from "../components/Layout";

const Settings: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h4">Settings</Typography>
      <Typography>Manage your settings here.</Typography>
    </Layout>
  );
};

export default Settings;
