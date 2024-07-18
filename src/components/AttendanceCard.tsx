import React from "react";
import { Card, CardContent, Stack, Typography, Chip } from "@mui/material";
import {
  AccessTime as AccessTimeIcon,
  CalendarToday as CalendarTodayIcon,
} from "@mui/icons-material";

interface AttendanceCardProps {
  title: string;
  classroom: string;
  time: string;
  date: string;
  status: string;
}

const AttendanceCard: React.FC<AttendanceCardProps> = ({
  title,
  classroom,
  time,
  date,
  status,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "251px",
        borderRadius: "15px",
        border: "1px solid #A0A0A0",
      }}
    >
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Typography
            variant="h6"
            component="div"
            fontSize="24px"
            fontWeight="600"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="#9A9A9A"
            fontSize="16px"
            sx={{
              border: "1px solid #D3D3D3",
              borderRadius: "5px",
            }}
            py="7px"
            px="5px"
          >
            {`Classroom: ${classroom}`}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <AccessTimeIcon fontSize="small" sx={{ color: "#989898" }} />
            <Typography variant="body2" color="#989898">
              {time}
            </Typography>
            <CalendarTodayIcon fontSize="small" sx={{ color: "#989898" }} />
            <Typography variant="body2" color="#989898">
              {date}
            </Typography>
          </Stack>
          <Chip
            label={`Status: ${status}`}
            sx={{
              bgcolor: status === "Present" ? "#DDFFF3" : "#FFD1D1",
              color: status === "Present" ? "#3EDC4E" : "#D8000C",
              borderRadius: "5px",
              width: "200px",
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AttendanceCard;
