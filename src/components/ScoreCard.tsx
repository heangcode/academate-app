import React from "react";
import { Box, Typography } from "@mui/material";

interface ScoreCardProps {
  title: string;
  score: string;
  details: string;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ title, score, details }) => {
  return (
    <Box
      sx={{
        width: "367px",
        height: "143px",
        backgroundColor: "#60CAED45",
        borderRadius: "5px",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <Typography color="#3C3C3C" fontSize="24px" fontWeight="600" mb={1}>
        {title}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Typography color="#2C97EB" fontSize="48px" fontWeight="600">
          {score}
        </Typography>
        <Typography color="#3C3C3C" fontSize="24px" fontWeight="600">
          {details}
        </Typography>
      </Box>
    </Box>
  );
};

export default ScoreCard;
