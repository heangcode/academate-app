import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  IconButton,
} from "@mui/material";
import {
  AccessTime,
  ArrowBack,
  CalendarMonth,
  Close,
} from "@mui/icons-material";
import { AttendanceReportData } from "../data/AttendanceReportData";
import { AttendanceReviewData } from "../data/AttendanceReviewData";
import ExcelIcon from "./icons/ExcelIcon";

interface AttendanceReportDialogProps {
  open: boolean;
  onClose: () => void;
}

const AttendanceReportDialog: React.FC<AttendanceReportDialogProps> = ({
  open,
  onClose,
}) => {
  const [isReview, setIsReview] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isReportSubmitted, setIsReportSubmitted] = useState(false);

  const handleReviewClick = () => {
    setIsReview(true);
  };

  const handleBackClick = () => {
    setIsReview(false);
  };

  const handleConfirmClick = () => {
    setIsSubmitted(true);
  };

  const handleContinueSubmittedClick = () => {
    setIsReportSubmitted(true);
  };

  const handleClose = () => {
    setIsReview(false);
    setIsSubmitted(false);
    setIsReportSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      {isReportSubmitted ? (
        <Box p={3}>
          <IconButton
            onClick={handleClose}
            sx={{
              color: "#606060",
              width: "22px",
              height: "22px",
              padding: "20px",
              my: "10px",
            }}
          >
            <Close />
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={3}
          >
            <Typography variant="h4" fontWeight="600">
              Attendance Report
            </Typography>
            <Typography
              fontSize="14px"
              bgcolor="#E5FFF7"
              borderRadius="5px"
              color="#0CBC8B"
              px="13px"
            >
              Report Submitted on 9:30 AM | 03 January 2023
            </Typography>
          </Box>
          <Stack direction="column" spacing="12px" mb={3}>
            <Typography variant="h6" fontSize="24px" fontWeight="600">
              How to Make an Array and its Types in C++
            </Typography>
            <Box display="flex" alignItems="center" gap="13px">
              <Typography
                fontSize="16px"
                color="#989898"
                sx={{
                  border: "1px solid #D3D3D3",
                  borderRadius: "5px",
                  px: "13px",
                }}
              >
                Class: Phnom Penh
              </Typography>
              <Box display="flex" gap={1}>
                <AccessTime sx={{ color: "#989898" }} />
                <Typography fontSize="16px" color="#989898">
                  12:40 PM
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <CalendarMonth sx={{ color: "#989898" }} />
                <Typography fontSize="16px" color="#989898">
                  03 Jan 2023
                </Typography>
              </Box>
              <Typography
                bgcolor="#EDEDED"
                fontSize="16px"
                color="#6D6D6D"
                px="17px"
                borderRadius="5px"
              >
                Status: Completed
              </Typography>
              <Button
                sx={{
                  textTransform: "none",
                  border: "1px solid #33C481",
                  borderRadius: "5px",
                  color: "#21A366",
                }}
                variant="outlined"
                startIcon={<ExcelIcon />}
              >
                Download Report
              </Button>
            </Box>
          </Stack>
          <Box mt="60px">
            <Typography fontSize="20px" fontWeight="600" mb={2}>
              Total Students: 25
            </Typography>
            <Stack direction="row" spacing="72px" mb={2}>
              <Typography fontSize="20px" fontWeight="600" color="#11A529">
                Present: 20
              </Typography>
              <Typography fontSize="20px" fontWeight="600" color="#F93333">
                Absent: 3
              </Typography>
              <Typography fontSize="20px" fontWeight="600" color="#2C97EB">
                Late: 2
              </Typography>
            </Stack>
            <Typography fontSize="20px" color="#474747" fontWeight="600" mb={2}>
              Attendance Details
            </Typography>
          </Box>
          <TableContainer>
            <Table sx={{ border: "1px solid #D4D4D4" }}>
              <TableHead
                sx={{ border: "1px solid #D4D4D4", bgcolor: "#F0F0F0" }}
              >
                <TableRow sx={{ border: "1px solid #D4D4D4" }}>
                  <TableCell sx={{ border: "1px solid #D4D4D4" }}>No</TableCell>
                  <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                    Student ID
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                    Student Name
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                    Classroom
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                    Attendance
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {AttendanceReviewData.map((student, index) => (
                  <TableRow key={student.id}>
                    <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                      {index + 1}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                      {student.id}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                      {student.name}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                      {student.classroom}
                    </TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        sx={{
                          borderRadius: "5px",
                          width: "104px",
                          height: "29px",
                          textAlign: "left",
                          textTransform: "none",
                          bgcolor:
                            student.attendance === "Present"
                              ? "#E5FFF7"
                              : student.attendance === "Absent"
                              ? "#FFEFEF"
                              : "#C8E4FA",
                          color:
                            student.attendance === "Present"
                              ? "green"
                              : student.attendance === "Absent"
                              ? "red"
                              : "blue",
                        }}
                      >
                        {student.attendance}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : isSubmitted ? (
        <Box
          p={3}
          textAlign="center"
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography
            variant="h4"
            fontSize="36px"
            width="630px"
            fontWeight="600"
            color="#434343"
            mb={3}
          >
            Attendance Report Submitted Successfully
          </Typography>
          <Box width="100%" maxWidth="667px" textAlign="left">
            <Typography variant="h6" mb={2} fontSize="24px" fontWeight="600">
              How to Make an Array and its Types in C++
            </Typography>
            <Stack direction="row" spacing={3} mb={2}>
              <Typography
                fontSize="16px"
                color="#989898"
                sx={{
                  border: "1px solid #D3D3D3",
                  borderRadius: "5px",
                  px: "13px",
                }}
              >
                Class: Phnom Penh
              </Typography>
              <Box display="flex" gap={1}>
                <AccessTime sx={{ color: "#989898" }} />
                <Typography fontSize="16px" color="#989898">
                  12:40 PM
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <CalendarMonth sx={{ color: "#989898" }} />
                <Typography fontSize="16px" color="#989898">
                  03 Jan 2023
                </Typography>
              </Box>
              <Typography
                bgcolor="#EDEDED"
                fontSize="16px"
                color="#6D6D6D"
                px="17px"
                borderRadius="5px"
              >
                Status: Completed
              </Typography>
            </Stack>
            <Box mt="60px">
              <Typography fontSize="20px" fontWeight="600" mb={2}>
                Total Students: 25
              </Typography>
              <Stack direction="row" spacing="72px" mb={2}>
                <Typography fontSize="20px" fontWeight="600" color="#11A529">
                  Present: 20
                </Typography>
                <Typography fontSize="20px" fontWeight="600" color="#F93333">
                  Absent: 3
                </Typography>
                <Typography fontSize="20px" fontWeight="600" color="#2C97EB">
                  Late: 2
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Button
            color="primary"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              color: "white",
              backgroundColor: "#3BB2D9",
              mt: "116px",
              width: "381px",
            }}
            size="large"
            onClick={handleContinueSubmittedClick}
          >
            Continue
          </Button>
        </Box>
      ) : (
        <>
          {isReview ? (
            <IconButton
              onClick={handleBackClick}
              sx={{
                color: "#606060",
                width: "22px",
                height: "22px",
                padding: "20px",
                margin: "10px",
              }}
            >
              <ArrowBack />
            </IconButton>
          ) : (
            <IconButton
              onClick={handleClose}
              sx={{
                color: "#606060",
                width: "22px",
                height: "22px",
                padding: "20px",
                margin: "10px",
              }}
            >
              <Close />
            </IconButton>
          )}
          {isReview ? (
            <Box p={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={3}
              >
                <Typography variant="h4" fontWeight="600">
                  Review Attendance Report
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    color: "white",
                    backgroundColor: "#3BB2D9",
                  }}
                  onClick={handleConfirmClick}
                >
                  Confirm
                </Button>
              </Box>
              <Stack direction="column" spacing="12px" mb={3}>
                <Typography variant="h6" fontSize="24px" fontWeight="600">
                  How to Make an Array and its Types in C++
                </Typography>
                <Stack direction="row" spacing="13px">
                  <Typography
                    fontSize="16px"
                    color="#989898"
                    sx={{
                      border: "1px solid #D3D3D3",
                      borderRadius: "5px",
                      px: "13px",
                    }}
                  >
                    Batch 3CO - JYY
                  </Typography>
                  <Box display="flex" gap={1}>
                    <AccessTime sx={{ color: "#989898" }} />
                    <Typography fontSize="16px" color="#989898">
                      12:40 PM
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1}>
                    <CalendarMonth sx={{ color: "#989898" }} />
                    <Typography fontSize="16px" color="#989898">
                      03 Jan 2023
                    </Typography>
                  </Box>
                  <Typography
                    bgcolor="#EDEDED"
                    fontSize="16px"
                    color="#6D6D6D"
                    px="17px"
                    borderRadius="5px"
                  >
                    Status: Completed
                  </Typography>
                </Stack>
              </Stack>
              <Box mt="60px">
                <Typography fontSize="20px" fontWeight="600" mb={2}>
                  Total Students: 25
                </Typography>
                <Stack direction="row" spacing={3} mb={2}>
                  <Typography fontSize="20px" fontWeight="600" color="#11A529">
                    Present: 20
                  </Typography>
                  <Typography fontSize="20px" fontWeight="600" color="#F93333">
                    Absent: 3
                  </Typography>
                  <Typography fontSize="20px" fontWeight="600" color="#2C97EB">
                    Late: 2
                  </Typography>
                </Stack>
                <Typography
                  fontSize="20px"
                  color="#474747"
                  fontWeight="600"
                  mb={2}
                >
                  List of Absent Students
                </Typography>
              </Box>
              <TableContainer>
                <Table sx={{ border: "1px solid #D4D4D4" }}>
                  <TableHead
                    sx={{ border: "1px solid #D4D4D4", bgcolor: "#F0F0F0" }}
                  >
                    <TableRow sx={{ border: "1px solid #D4D4D4" }}>
                      <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                        No
                      </TableCell>
                      <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                        Student ID
                      </TableCell>
                      <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                        Student Name
                      </TableCell>
                      <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                        Classroom
                      </TableCell>
                      <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                        Attendance
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {AttendanceReviewData.map((student, index) => (
                      <TableRow key={student.id}>
                        <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                          {index + 1}
                        </TableCell>
                        <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                          {student.id}
                        </TableCell>
                        <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                          {student.name}
                        </TableCell>
                        <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                          {student.classroom}
                        </TableCell>
                        <TableCell>
                          <Button
                            size="small"
                            sx={{
                              borderRadius: "5px",
                              width: "104px",
                              height: "29px",
                              textAlign: "left",
                              textTransform: "none",
                              bgcolor:
                                student.attendance === "Present"
                                  ? "#E5FFF7"
                                  : student.attendance === "Absent"
                                  ? "#FFEFEF"
                                  : "#C8E4FA",
                              color:
                                student.attendance === "Present"
                                  ? "green"
                                  : student.attendance === "Absent"
                                  ? "red"
                                  : "blue",
                            }}
                          >
                            {student.attendance}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          ) : (
            <>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <DialogTitle fontSize="32px" fontWeight="600" color="#3C3C3C">
                  Attendance Report
                </DialogTitle>
                <Button
                  onClick={handleClose}
                  color="primary"
                  variant="contained"
                  sx={{
                    marginRight: "10px",
                    textTransform: "capitalize",
                    color: "white",
                    backgroundColor: "#3BB2D9",
                  }}
                >
                  Submit Attendance
                </Button>
              </Box>
              <DialogContent>
                <Stack direction="column" spacing="12px">
                  <Typography variant="h6" fontSize="24px" fontWeight="600">
                    How to Make an Array and its Types in C++
                  </Typography>
                  <Stack direction="row" spacing="13px">
                    <Typography
                      fontSize="16px"
                      color="#989898"
                      sx={{
                        border: "1px solid #D3D3D3",
                        borderRadius: "5px",
                        px: "13px",
                      }}
                    >
                      Total students: 25
                    </Typography>
                    <Box display="flex" gap={1}>
                      <AccessTime sx={{ color: "#989898" }} />
                      <Typography fontSize="16px" color="#989898">
                        09:00 AM
                      </Typography>
                    </Box>
                    <Box display="flex" gap={1}>
                      <CalendarMonth sx={{ color: "#989898" }} />
                      <Typography fontSize="16px" color="#989898">
                        03 Jan 2023
                      </Typography>
                    </Box>
                    <Typography
                      bgcolor="#EDEDED"
                      fontSize="16px"
                      color="#6D6D6D"
                      px="17px"
                      borderRadius="5px"
                    >
                      Status: Checking
                    </Typography>
                  </Stack>
                </Stack>
                <Box mt="64px">
                  <TableContainer>
                    <Table sx={{ border: "1px solid #D4D4D4" }}>
                      <TableHead
                        sx={{ border: "1px solid #D4D4D4", bgcolor: "#F0F0F0" }}
                      >
                        <TableRow sx={{ border: "1px solid #D4D4D4" }}>
                          <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                            No
                          </TableCell>
                          <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                            Student ID
                          </TableCell>
                          <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                            Student Name
                          </TableCell>
                          <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                            Classroom
                          </TableCell>
                          <TableCell>Attendance</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {AttendanceReportData.map((student, index) => (
                          <TableRow key={student.id}>
                            <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                              {index + 1}
                            </TableCell>
                            <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                              {student.id}
                            </TableCell>
                            <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                              {student.name}
                            </TableCell>
                            <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                              {student.classroom}
                            </TableCell>
                            <TableCell sx={{ border: "1px solid #D4D4D4" }}>
                              <Button
                                size="small"
                                sx={{
                                  bgcolor: "#EDEDED",
                                  borderRadius: "5px",
                                  width: "104px",
                                  height: "29px",
                                  color: "#606060",
                                  textAlign: "left",
                                }}
                                onClick={handleReviewClick}
                              >
                                -
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </DialogContent>
            </>
          )}
        </>
      )}
    </Dialog>
  );
};

export default AttendanceReportDialog;
