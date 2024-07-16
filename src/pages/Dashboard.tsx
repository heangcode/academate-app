import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import Layout from "../components/Layout";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h4">Dashboard</Typography>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary">
          Create Classroom
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
            <Typography variant="h6">Female students</Typography>
            <Typography variant="h4">50</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
            <Typography variant="h6">Male students</Typography>
            <Typography variant="h4">20</Typography>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
