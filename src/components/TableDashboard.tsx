import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import { Phone as PhoneIcon, Email as EmailIcon } from "@mui/icons-material";
import { TableDashboardData } from "../data/TableDashboardData";

const TableDashboard: React.FC = () => {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Course Name</TableCell>
            <TableCell align="center">Classroom</TableCell>
            <TableCell align="center">Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableDashboardData.map((student, index) => (
            <TableRow key={index}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar src={student.avatar} sx={{ mr: 2 }} />
                  {student.name}
                </Box>
              </TableCell>
              <TableCell align="center">{student.gender}</TableCell>
              <TableCell align="center">{student.course}</TableCell>
              <TableCell align="center">{student.classroom}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="phone">
                  <PhoneIcon />
                </IconButton>
                <IconButton aria-label="email">
                  <EmailIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDashboard;
