import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Tabs,
  Tab,
  Card,
  CardContent,
  Stack,
  Divider,
  IconButton,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { TableDashboardData } from "../data/TableDashboardData";
import { studentProfileData } from "../data/StudentProfileData";
import { ArrowBack, Email, FilterAlt, Phone } from "@mui/icons-material";
import ScoreCard from "../components/ScoreCard";
import InfoCard from "../components/InfoCard";
import AttendanceCard from "../components/AttendanceCard";
import StudentProfileScoreCard from "../components/StudentProfileScoreCard";

const StudentProfile: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const student = TableDashboardData.find(
    (student) => student.id === Number(id)
  );

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  if (!student) return <Typography>Student not found</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Box display="flex" alignItems="center" gap={2} mb="56px">
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconButton>{" "}
        <Typography
          variant="h6"
          fontSize="32px"
          color="#3C3C3C"
          fontWeight="600"
        >
          Student Profile
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" mb={3}>
          <Avatar
            src={student.avatar}
            sx={{ width: "107px", height: "107px", mr: 2 }}
          />
          <Stack direction="column" spacing={1}>
            <Typography
              variant="h4"
              color="#333333"
              fontSize="22px"
              fontWeight="bold"
            >
              {student.name}
            </Typography>
            <Typography color="#3C3C3C" fontSize="16px" fontWeight="600">
              Student ID: TIPSG5682
            </Typography>
            <Typography color="#3C3C3C" fontSize="16px" fontWeight="600">
              Gender: {student.gender}
            </Typography>
          </Stack>
        </Box>
        <Box>
          <ScoreCard title="Attendance" score="85%" details="85/100" />
        </Box>
      </Box>
      <Box sx={{ border: "divider", borderBottom: 1, borderColor: "#E4E4E4" }}>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="General" />
          <Tab label="Attendance" />
          <Tab label="Quiz" />
          <Tab label="Exams" />
          <Tab label="Assignment" />
          <Tab label="Score" />
        </Tabs>
      </Box>

      {tabIndex === 0 && (
        <Box mt={3}>
          <Card sx={{ mb: 2 }} variant="outlined">
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap={10}
                width="100%"
              >
                <Stack direction="column" spacing={3} width="100%">
                  <Box>
                    <Typography color="#3C3C3C" fontWeight="600" variant="h6">
                      Course: B.Tech Specialization in Health Informatics
                    </Typography>
                    <Typography color="#3C3C3C" fontWeight="500">
                      Father's name: Pov Chanthy
                    </Typography>
                    <Typography color="#3C3C3C" fontWeight="500">
                      Father's phone: 12345 69870
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Typography color="#3C3C3C" fontWeight="500">
                        Course Start Date: 17 Jan 2023
                      </Typography>
                      <Typography color="#3C3C3C" fontWeight="500">
                        Course End Date: 17 Jan 2025
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Typography color="#3C3C3C" fontWeight="500">
                        Duration: 1 year academic
                      </Typography>
                      <Typography color="#3C3C3C" fontWeight="500">
                        Batch: 11th - Generations
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box
                  display="flex"
                  alignItems="start"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Box>
                    <Typography
                      color="#3C3C3C"
                      fontWeight="600"
                      mb="15px"
                      variant="h6"
                    >
                      Center Details
                    </Typography>
                    <Typography color="#3C3C3C" fontWeight="400">
                      Village: Russey keo tih mouy
                    </Typography>
                    <Typography color="#3C3C3C" fontWeight="400">
                      District: Russey keo
                    </Typography>
                    <Typography color="#3C3C3C" fontWeight="400">
                      City/Province: Phnom Penh
                    </Typography>
                    <Typography color="#3C3C3C" fontWeight="400" mt="28px">
                      Address: Charles de Gaulle Boulevard, 12253.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      color="#3C3C3C"
                      fontWeight="600"
                      mb="15px"
                      variant="h6"
                    >
                      Center Contact
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Phone />
                      <Typography color="#3C3C3C" fontWeight="400">
                        12345 69870
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Email />
                      <Typography color="#3C3C3C" fontWeight="400">
                        sokun_sonamheng@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Box display="flex" justifyContent="space-between">
            <InfoCard
              title="Attendance"
              total={studentProfileData.attendance.total}
              passed={studentProfileData.attendance.attended}
              missed={studentProfileData.attendance.missed}
            />
            <InfoCard
              title="Quiz"
              total={studentProfileData.quiz.total}
              attempted={studentProfileData.quiz.attempted}
              unattempted={studentProfileData.quiz.unattempted}
              passed={studentProfileData.quiz.passed}
              failed={studentProfileData.quiz.failed}
            />
            <InfoCard
              title="Exams"
              total={studentProfileData.exams.total}
              attempted={studentProfileData.exams.attempted}
              unattempted={studentProfileData.exams.unattempted}
              passed={studentProfileData.exams.passed}
              failed={studentProfileData.exams.failed}
            />
            <InfoCard
              title="Assignment"
              total={studentProfileData.assignments.total}
              attempted={studentProfileData.assignments.attempted}
              unattempted={studentProfileData.assignments.unattempted}
              passed={studentProfileData.assignments.passed}
              failed={studentProfileData.assignments.failed}
            />
          </Box>
        </Box>
      )}

      {tabIndex === 1 && (
        <Box mt={3}>
          <Box display="flex" justifyContent="space-between">
            <Stack direction="row" spacing="65px">
              <Typography color="#3C3C3C" fontSize="16px" fontWeight="600">
                Total Attendance : 165
              </Typography>
              <Typography color="#3EDC4E" fontSize="16px" fontWeight="600">
                Present : 135
              </Typography>
              <Typography color="#F93333" fontSize="16px" fontWeight="600">
                Absent : 30
              </Typography>
            </Stack>
            <Button
              startIcon={<FilterAlt />}
              sx={{
                backgroundColor: "#C8E4FA",
                color: "#007BFF",
                textTransform: "capitalize",
                borderRadius: "5px",
                width: "157px",
                height: "44px",
                "&:hover": {
                  backgroundColor: "#007BFF",
                  color: "#fff",
                },
              }}
            >
              Filter shift
            </Button>{" "}
          </Box>
          <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
            <Grid container spacing={2}>
              {studentProfileData.attendanceDetails.map((attendance, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <AttendanceCard
                    title={attendance.title}
                    classroom={attendance.classroom}
                    time={attendance.time}
                    date={attendance.date}
                    status={attendance.status}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}

      {tabIndex === 2 && (
        <Box>
          <Typography>Quiz</Typography>
        </Box>
      )}
      {tabIndex === 3 && (
        <Box>
          <Typography>Exams</Typography>
        </Box>
      )}
      {tabIndex === 4 && (
        <Box>
          <Typography>Assignment</Typography>
        </Box>
      )}
      {tabIndex === 5 && (
        <Box mt={3}>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Stack direction="row" spacing="65px">
              <Typography color="#3C3C3C" fontSize="16px" fontWeight="600">
                Total score : 250
              </Typography>
              <Typography color="#6B6B6B" fontSize="16px" fontWeight="600">
                Quiz : 60
              </Typography>
              <Typography color="#9E9E9E" fontSize="16px" fontWeight="600">
                Exams : 120
              </Typography>
              <Typography color="#9E9E9E" fontSize="16px" fontWeight="600">
                Assignment : 20
              </Typography>
              <Typography color="#3EDC4E" fontSize="16px" fontWeight="600">
                Passed : 25
              </Typography>
              <Typography color="#F93333" fontSize="16px" fontWeight="600">
                Failed : 25
              </Typography>
            </Stack>
            <Button
              startIcon={<FilterAlt />}
              sx={{
                backgroundColor: "#C8E4FA",
                color: "#007BFF",
                textTransform: "capitalize",
                borderRadius: "5px",
                width: "157px",
                height: "44px",
                "&:hover": {
                  backgroundColor: "#007BFF",
                  color: "#fff",
                },
              }}
            >
              Filter shift
            </Button>{" "}
          </Box>
          <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
            <Grid container spacing={2}>
              {studentProfileData.scoreDetails.map((score, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <StudentProfileScoreCard
                    title={score.title}
                    subject={score.subject}
                    time={score.time}
                    date={score.date}
                    passingPercentage={score.passingPercentage}
                    scoredPercentage={score.scoredPercentage}
                    status={score.status}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default StudentProfile;
