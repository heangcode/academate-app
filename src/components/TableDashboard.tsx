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

interface Student {
  name: string;
  gender: string;
  course: string;
  classroom: string;
  contact: string;
  avatar: string;
}

const mockData: Student[] = [
  {
    name: "Sokun Sonamheng",
    gender: "Male",
    course: "Java",
    classroom: "Siem Reap",
    contact: "phone",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Sokun Sonita",
    gender: "Female",
    course: "Java",
    classroom: "Phnom Penh",
    contact: "email",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Sokun Dalis",
    gender: "Female",
    course: "Python",
    classroom: "Battambang",
    contact: "phone",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Sokun Dara",
    gender: "Male",
    course: "JavaScript",
    classroom: "Kampong Cham",
    contact: "email",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Sokun Borey",
    gender: "Male",
    course: "C++",
    classroom: "Sihanoukville",
    contact: "phone",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Sokun Chantha",
    gender: "Female",
    course: "Java",
    classroom: "Kampot",
    contact: "email",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Sokun Khema",
    gender: "Female",
    course: "Python",
    classroom: "Takeo",
    contact: "phone",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Sokun Veasna",
    gender: "Male",
    course: "JavaScript",
    classroom: "Kandal",
    contact: "email",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Sokun Sreynith",
    gender: "Female",
    course: "C++",
    classroom: "Koh Kong",
    contact: "phone",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Sokun Sopheak",
    gender: "Male",
    course: "Java",
    classroom: "Banteay Meanchey",
    contact: "email",
    avatar: "https://bit.ly/dan-abramov",
  },
];

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
          {mockData.map((student, index) => (
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
