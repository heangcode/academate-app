import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Pagination,
  TextField,
} from "@mui/material";
import { Visibility as VisibilityIcon } from "@mui/icons-material";
import DeclareResultDialog from "./DeclareResultDialog";

interface Student {
  id: number;
  name: string;
  course: string;
  classroom: string;
  score: string;
  attendance: string;
}

interface ScoreTableProps {
  students: Student[];
}

const ScoreTable: React.FC<ScoreTableProps> = ({ students }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Classroom</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Attendance</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((student, index) => (
                <TableRow key={student.id}>
                  <TableCell>{index + 1 + (page - 1) * rowsPerPage}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell sx={{ color: "#8A8A8A" }}>
                    {student.course}
                  </TableCell>
                  <TableCell sx={{ color: "#8A8A8A" }}>
                    {student.classroom}
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <TextField
                        variant="outlined"
                        size="small"
                        sx={{
                          width: "81px",
                          height: "32px",
                          marginRight: "4px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "5px",
                            borderColor: "#D7D7D7",
                          },
                        }}
                        onClick={handleClickOpen}
                      />
                      /50
                    </Box>
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
                  <TableCell>
                    <Button
                      variant="outlined"
                      sx={{
                        backgroundColor: "#C8E4FA",
                        color: "#007BFF",
                        textTransform: "capitalize",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: "#007BFF",
                          color: "#fff",
                        },
                      }}
                      startIcon={<VisibilityIcon />}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" alignItems="center" justifyContent="end">
        <Pagination
          count={Math.ceil(students.length / rowsPerPage)}
          page={page}
          color="primary"
          shape="rounded"
          onChange={handleChangePage}
          sx={{ mt: 2 }}
        />
      </Box>
      <DeclareResultDialog open={openDialog} onClose={handleClose} />
    </Box>
  );
};

export default ScoreTable;
