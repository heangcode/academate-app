import React from "react";
import {
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
import Layout from "../components/Layout";
import TableDashboard from "../components/TableDashboard";
import {
  Add as AddIcon,
  Female as FemaleIcon,
  Male as MaleIcon,
  FormatListBulleted as GenerationIcon,
  UnfoldMore,
} from "@mui/icons-material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
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
            Create Classroom
          </Button>
        </Box>
      </Box>
      <Box display="flex" alignItems="start" gap={3} width="100%">
        <Box width="100%">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Paper
                sx={{
                  bgcolor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                  p: 2,
                }}
              >
                <GenerationIcon
                  fontSize="large"
                  sx={{
                    color: "green",
                    bgcolor: "#e6f6fc",
                    borderRadius: "50%",
                    p: 1,
                    mr: 1,
                  }}
                />
                <Typography color="#919499" fontSize="16px">
                  Generation
                </Typography>
                <Typography variant="h6" color="#055D7A">
                  12th Generation
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper
                sx={{
                  bgcolor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                  p: 2,
                }}
              >
                <FemaleIcon
                  fontSize="large"
                  sx={{
                    color: "pink",
                    bgcolor: "#ffe6e6",
                    borderRadius: "50%",
                    p: 1,
                    mr: 1,
                  }}
                />
                <Typography color="#919499" fontSize="16px">
                  Female students
                </Typography>
                <Typography variant="h6" color="#055D7A">
                  50
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper
                sx={{
                  bgcolor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                  p: 2,
                }}
              >
                <MaleIcon
                  fontSize="large"
                  sx={{
                    color: "blue",
                    bgcolor: "#e6f6fc",
                    borderRadius: "50%",
                    p: 1,
                    mr: 1,
                  }}
                />
                <Typography color="#919499" fontSize="16px">
                  Male students
                </Typography>
                <Typography variant="h6" color="#055D7A">
                  20
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <TableDashboard />
        </Box>
        <Box width="500px">
          <Paper
            sx={{
              bgcolor: "white",
              borderRadius: "12px",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
              p: 2,
              mb: 2,
            }}
          >
            {/* Calendar */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>{" "}
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
              alignItems="center"
              justifyContent="space-between"
            >
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
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
            >
              <Chip
                label="1"
                sx={{
                  bgcolor: "#e6f6fc",
                  color: "#055D7A",
                  fontWeight: "bold",
                }}
              />
              <Typography
                variant="body1"
                color="#464E5F"
                textAlign="left"
                fontWeight="700"
                fontSize="16px"
              >
                Kampong Cham
              </Typography>

              <Stack direction="row" spacing={0.5}>
                <Typography
                  variant="body1"
                  color="#3BB2D9"
                  fontWeight="700"
                  fontSize="16px"
                >
                  30
                </Typography>
                <PersonRoundedIcon sx={{ color: "#3BB2D9" }} />
              </Stack>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
            >
              <Chip
                label="2"
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
                Siem Reap
              </Typography>

              <Stack direction="row" spacing={0.5}>
                <Typography
                  variant="body1"
                  color="#3BB2D9"
                  fontWeight="700"
                  fontSize="16px"
                >
                  20
                </Typography>
                <PersonRoundedIcon sx={{ color: "#3BB2D9" }} />
              </Stack>
            </Box>
            <Divider sx={{ my: 2 }} />
          </Paper>
        </Box>
      </Box>
    </Layout>
  );
};

export default Dashboard;
