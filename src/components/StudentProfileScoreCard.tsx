import React from "react";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import {
  AccessTime as AccessTimeIcon,
  CalendarToday as CalendarTodayIcon,
} from "@mui/icons-material";

interface StudentProfileScoreCardProps {
  title: string;
  subject: string;
  time: string;
  date: string;
  passingPercentage: number;
  scoredPercentage: number;
  status: string;
}

const StudentProfileScoreCard: React.FC<StudentProfileScoreCardProps> = ({
  title,
  subject,
  time,
  date,
  passingPercentage,
  scoredPercentage,
  status,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "330px",
        borderRadius: "5px",
        border: "1px solid #E6E6E6",
      }}
    >
      <CardContent sx={{ position: "relative" }}>
        <Chip
          label={status}
          sx={{
            bgcolor: status === "Passed" ? "#DDFFF3" : "#FFD1D1",
            color: status === "Passed" ? "#3EDC4E" : "#D8000C",
            borderRadius: "0px 5px 0px 5px",
            width: "82.04px",
            height: "27px",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 50,
          }}
        />
        <Stack direction="column" spacing={2} mt="15px">
          <Typography
            variant="h6"
            component="div"
            fontSize="18px"
            fontWeight="600"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="#9A9A9A" fontSize="14px">
            Subject: {subject}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <CalendarTodayIcon fontSize="small" sx={{ color: "#3C3C3C" }} />
            <Typography variant="body2" color="#3C3C3C">
              {date}
            </Typography>
            <AccessTimeIcon fontSize="small" sx={{ color: "#3C3C3C" }} />
            <Typography variant="body2" color="#3C3C3C">
              {time}
            </Typography>
          </Stack>
          <Typography variant="body2" color="#3C3C3C" fontSize="14px">
            Passing Percentage:{" "}
            <span style={{ color: "#007BFF" }}>{passingPercentage}%</span>
          </Typography>
          <Typography variant="body2" color="#3C3C3C" fontSize="14px">
            Scored Percentage:{" "}
            <span
              style={{ color: status === "Passed" ? "#3EDC4E" : "#F93333" }}
            >
              {scoredPercentage}%
            </span>
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3BB2D9",
              color: "white",
              borderRadius: "5px",
              textTransform: "capitalize",
              width: "100%",
              mt: 1,
            }}
          >
            View Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StudentProfileScoreCard;
