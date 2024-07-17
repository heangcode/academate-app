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
  PaginationItem,
} from "@mui/material";
import { Visibility as VisibilityIcon } from "@mui/icons-material";
import { styled } from "@mui/system";

interface Student {
  id: number;
  name: string;
  course: string;
  classroom: string;
  dob: string;
  attendance: string;
  status: string;
}

interface StudentTableProps {
  students: Student[];
  actions: string[];
}

const CustomPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    borderRadius: "8px",
    margin: theme.spacing(0.5),
  },
  "& .Mui-selected": {
    backgroundColor: "#00A9E2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#00A9E2",
    },
  },
}));

const StudentTable: React.FC<StudentTableProps> = ({ students, actions }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

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
              <TableCell>Date of Birth</TableCell>
              <TableCell>Attendance</TableCell>
              {actions.length > 0 && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {students
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((student, index) => (
                <TableRow key={student.id}>
                  <TableCell>{index + 1 + (page - 1) * rowsPerPage}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>{student.classroom}</TableCell>
                  <TableCell>{student.dob}</TableCell>
                  <TableCell>{student.attendance}</TableCell>
                  {actions.length > 0 && (
                    <TableCell>
                      {actions.includes("view") && (
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#C8E4FA",
                            color: "#007BFF",
                            textTransform: "capitalize",
                            borderRadius: "5px",
                            width: "171.45px",
                            height: "36px",
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
                      )}
                      {actions.includes("accept") && (
                        <Button
                          variant="contained"
                          color="success"
                          sx={{ mr: 1 }}
                        >
                          Accept
                        </Button>
                      )}
                      {actions.includes("reject") && (
                        <Button variant="contained" color="error">
                          Reject
                        </Button>
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" alignItems="center" justifyContent="end">
        <CustomPagination
          count={Math.ceil(students.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          sx={{ mt: 2 }}
        />
      </Box>
    </Box>
  );
};

export default StudentTable;
