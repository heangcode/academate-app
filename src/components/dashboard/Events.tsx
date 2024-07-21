import React from "react";
import { Paper, Box, Typography, Divider } from "@mui/material";
import { UnfoldMore } from "@mui/icons-material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Events: React.FC = () => (
  <Paper
    sx={{
      bgcolor: "white",
      borderRadius: "12px",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
      p: 2,
      mb: 2,
    }}
  >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
    <Divider />
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={2}
    >
      <Typography
        variant="body2"
        fontSize="16px"
        fontWeight="600"
        color="#333333"
        textAlign="left"
      >
        Events
      </Typography>
      <UnfoldMore />
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="start"
      mt={2}
    >
      <Typography variant="body2" color="#666666" textAlign="left">
        08 AM - 09 AM
      </Typography>
      <Typography variant="body2" color="#333333" textAlign="left">
        Class: Kampong Cham | Course: JAVA
      </Typography>
    </Box>
  </Paper>
);

export { Events };
