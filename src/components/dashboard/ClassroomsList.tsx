import React from "react";
import { Paper, Box, Typography, Divider, Chip, Stack } from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const ClassroomsList: React.FC = () => (
  <Paper
    sx={{
      bgcolor: "white",
      borderRadius: "12px",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
      p: 2,
    }}
  >
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box
        display="flex"
        justifyContent="start"
        flexDirection="column"
        alignItems="start"
      >
        <Typography
          variant="body2"
          fontSize="14px"
          color="#919499"
          textAlign="center"
        >
          Total classrooms
        </Typography>
        <Typography
          variant="body1"
          fontSize="20px"
          fontWeight="600"
          color="#333333"
          textAlign="center"
        >
          11 classrooms
        </Typography>
      </Box>
      <Typography
        variant="body2"
        color="#3BB2D9"
        textAlign="center"
        sx={{ cursor: "pointer", mt: 1, textDecoration: "underline" }}
      >
        View more
      </Typography>
    </Box>
    <Divider sx={{ my: 2 }} />
    {["Kampong Cham", "Siem Reap"].map((location, index) => (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
        key={index}
      >
        <Chip
          label={index + 1}
          sx={{
            bgcolor: "#e6f6fc",
            color: "#055D7A",
            fontWeight: "bold",
          }}
        />
        <Typography
          variant="body1"
          color="#464E5F"
          fontWeight="700"
          fontSize="16px"
        >
          {location}
        </Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography
            variant="body1"
            color="#3BB2D9"
            fontWeight="700"
            fontSize="16px"
          >
            {index === 0 ? 30 : 20}
          </Typography>
          <PersonRoundedIcon sx={{ color: "#3BB2D9" }} />
        </Stack>
      </Box>
    ))}
    <Divider sx={{ my: 2 }} />
  </Paper>
);

export { ClassroomsList };
