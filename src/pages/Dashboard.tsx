import React from "react";
import { Box, Grid } from "@mui/material";
import {
  Female as FemaleIcon,
  Male as MaleIcon,
  FormatListBulleted as GenerationIcon,
} from "@mui/icons-material";
import Layout from "../components/Layout";
import {
  ClassroomsList,
  DashboardHeader,
  Events,
  InfoCard,
  TableDashboard,
} from "../components";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <DashboardHeader />
      <Box display="flex" alignItems="start" gap={3} width="100%">
        <Box width="100%">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <InfoCard
                Icon={GenerationIcon}
                title="Generation"
                value="12th Generation"
                iconBgColor="#e6f6fc"
                iconColor="green"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InfoCard
                Icon={FemaleIcon}
                title="Female students"
                value="50"
                iconBgColor="#ffe6e6"
                iconColor="pink"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InfoCard
                Icon={MaleIcon}
                title="Male students"
                value="20"
                iconBgColor="#e6f6fc"
                iconColor="blue"
              />
            </Grid>
          </Grid>
          <TableDashboard />
        </Box>
        <Box width="500px">
          <Events />
          <ClassroomsList />
        </Box>
      </Box>
    </Layout>
  );
};

export { Dashboard };
