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
              src="https://images.unsplash.com/photo-1523307730650-594bc63f9d67?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  <Typography fontSize="18px" fontWeight="600" mb="20px">
                    First Name <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    placeholder="First Name"
                    variant="outlined"
                    required
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",

                        "&:hover fieldset": {
                          borderColor: "#D9D9D9",
                        },
                      },
                      "& .MuiInputBase-input": {
                        padding: "15px 26px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography fontSize="18px" fontWeight="600" mb="20px">
                    Last Name <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    placeholder="Last Name"
                    variant="outlined"
                    required
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",

                        "&:hover fieldset": {
                          borderColor: "#D9D9D9",
                        },
                      },
                      "& .MuiInputBase-input": {
                        padding: "15px 26px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography fontSize="18px" fontWeight="600" mb="20px">
                    Phone number
                  </Typography>
                  <TextField
                    placeholder="Phone number"
                    variant="outlined"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",

                        "&:hover fieldset": {
                          borderColor: "#D9D9D9",
                        },
                      },
                      "& .MuiInputBase-input": {
                        padding: "15px 26px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography fontSize="18px" fontWeight="600" mb="20px">
                    Gender
                  </Typography>
                  <TextField
                    placeholder="Select Gender"
                    variant="outlined"
                    select
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",

                        "&:hover fieldset": {
                          borderColor: "#D9D9D9",
                        },
                      },
                      "& .MuiInputBase-input": {
                        padding: "15px 26px",
                      },
                    }}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Typography fontSize="18px" fontWeight="600" mb="20px">
                    Date of birth
                  </Typography>
                  <TextField
                    placeholder="Date of birth"
                    variant="outlined"
                    fullWidth
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",

                        "&:hover fieldset": {
                          borderColor: "#D9D9D9",
                        },
                      },
                      "& .MuiInputBase-input": {
                        padding: "15px 26px",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    alignSelf: "flex-start",
                    bgcolor: "#3BB2D9",
                    mt: 3,
                    color: "white",
                    width: "279px",
                    textTransform: "none",
                  }}
                  size="large"
                >
                  Update
                </Button>
              </Box>
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
