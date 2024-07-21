import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";

interface StudentProfileInfoCardProps {
  title: string;
  total: number;
  attempted?: number;
  unattempted?: number;
  passed?: number;
  failed?: number;
  missed?: number;
}

const StudentProfileInfoCard: React.FC<StudentProfileInfoCardProps> = ({
  title,
  total,
  attempted,
  unattempted,
  passed,
  failed,
  missed,
}) => {
  return (
    <Box>
      <Typography
        variant="h6"
        color="#3C3C3C"
        fontSize="20px"
        mb="12px"
        fontWeight="600"
      >
        {title}
      </Typography>
      <Card
        variant="outlined"
        sx={{
          width: "316px",
          borderRadius: "5px",
          border: "1px solid #ECECEC",
        }}
      >
        <CardContent>
          <Stack direction="column" spacing="10px">
            <Typography color="#3C3C3C" fontWeight="600" fontSize="16px">
              Total {title} : {total}
            </Typography>
            {(attempted !== undefined || unattempted !== undefined) && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                {attempted !== undefined && (
                  <Typography color="#6B6B6B" fontWeight="600" fontSize="16px">
                    Attempted : {attempted}
                  </Typography>
                )}
                {unattempted !== undefined && (
                  <Typography color="#9E9E9E" fontWeight="600" fontSize="16px">
                    Unattempted : {unattempted}
                  </Typography>
                )}
              </Box>
            )}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {passed !== undefined && (
                <Typography color="#60DF6F" fontWeight="600" fontSize="16px">
                  Passed: {passed}
                </Typography>
              )}
              {failed !== undefined && (
                <Typography fontWeight="600" fontSize="16px" color="#F93333">
                  Failed: {failed}
                </Typography>
              )}
            </Box>
            {missed !== undefined && (
              <Typography color="#F93333" fontWeight="600" fontSize="16px">
                Missed: {missed}
              </Typography>
            )}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3BB2D9",
                color: "white",
                borderRadius: "5px",
                textTransform: "capitalize",
                width: "100%",
              }}
            >
              View Details
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export { StudentProfileInfoCard };
