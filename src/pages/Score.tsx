import React from "react";
import { Typography } from "@mui/material";
import Layout from "../components/Layout";

const Score: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h4">Score</Typography>
      <Typography>Manage student scores here.</Typography>
    </Layout>
  );
};

export default Score;
