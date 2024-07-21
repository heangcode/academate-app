import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

const DashboardHeader: React.FC = () => (
  <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
    <Box>
      <Typography
        variant="h4"
        color="#055D7A"
        fontSize="26px"
        fontWeight="bold"
      >
        Dashboard
      </Typography>
      <Typography variant="body1" color="#919499" fontSize="16px">
        Instructor Dashboard
      </Typography>
    </Box>
    <Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ color: "white" }}
        size="large"
        startIcon={<AddIcon />}
      >
        Create Generation
      </Button>
    </Box>
  </Box>
);

export { DashboardHeader };
