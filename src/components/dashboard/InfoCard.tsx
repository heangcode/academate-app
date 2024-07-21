import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface InfoCardProps {
  Icon: SvgIconComponent;
  title: string;
  value: string;
  iconBgColor: string;
  iconColor: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  Icon,
  title,
  value,
  iconBgColor,
  iconColor,
}) => (
  <Paper
    sx={{
      bgcolor: "white",
      borderRadius: "12px",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
      p: 2,
    }}
  >
    <Box
      display="flex"
      alignItems="start"
      justifyContent="start"
      flexDirection="column"
      gap="8px"
    >
      <Icon
        fontSize="large"
        sx={{
          color: iconColor,
          bgcolor: iconBgColor,
          borderRadius: "50%",
          p: 1,
          mr: 1,
        }}
      />
      <Box>
        <Typography color="#919499" fontSize="16px">
          {title}
        </Typography>
        <Typography variant="h6" color="#055D7A">
          {value}
        </Typography>
      </Box>
    </Box>
  </Paper>
);

export { InfoCard };
