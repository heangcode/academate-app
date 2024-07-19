import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  TextField,
  Button,
  Avatar,
  MenuItem,
  Grid,
} from "@mui/material";
import Layout from "../components/Layout";

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

const Settings: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Typography
        variant="h4"
        color="#055D7A"
        fontSize="26px"
        fontWeight="bold"
      >
        Account Details
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} mt="36px">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="User profile" />
          <Tab label="User information" />
          <Tab label="Other" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={3}>
            <Avatar
              alt="Boran Pol"
              src="/path/to/profile/image.jpg" // Replace with the actual image path
              sx={{ width: 150, height: 150 }}
            />
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Boran Pol
            </Typography>
            <Typography color="textSecondary">boranpol@gmail.com</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Profile Information
            </Typography>
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone number"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Gender" variant="outlined" select fullWidth>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Date of birth"
                    variant="outlined"
                    fullWidth
                    type="date"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{ alignSelf: "flex-start", bgcolor: "#3BB2D9", mt: 3 }}
              >
                Update
              </Button>
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>User Informations</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Other</Typography>
      </TabPanel>
    </Layout>
  );
};

export default Settings;
