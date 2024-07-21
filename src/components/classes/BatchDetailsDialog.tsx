import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  Typography,
  Box,
  Grid,
  Stack,
} from "@mui/material";

interface BatchDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  generation: string;
  course: string;
}

function TabPanel(props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const BatchDetailsDialog: React.FC<BatchDetailsDialogProps> = ({
  open,
  onClose,
  generation,
  course,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle
        color="#434343"
        fontSize="36px"
        fontWeight="600"
      >{`Batch Details : ${generation} - Generations`}</DialogTitle>
      <DialogContent>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Overview" />
            <Tab label="Classes" />
            <Tab label="Assignments" />
            <Tab label="Quizzes" />
            <Tab label="Exams" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography
            variant="body2"
            color="#7E7E7E"
            fontSize="20px"
          >{`Course`}</Typography>
          <Typography
            variant="body1"
            color="#3C3C3C"
            fontSize="20px"
            fontWeight="600"
          >
            B.Tech In Computer Science and Engineering Specialization
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 2 }}
            color="#7E7E7E"
            fontSize="20px"
          >
            My Subjects
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                color="#3C3C3C"
                fontSize="16px"
                fontWeight="600"
              >
                Semester 1
              </Typography>
              <ul>
                <Stack direction="column" spacing={1}>
                  <li>C++ Language</li>
                  <li>OOPS using C#</li>
                  <li>Introduction to Bootstrap</li>
                  <li>Graphics Designing</li>
                </Stack>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                color="#3C3C3C"
                fontSize="16px"
                fontWeight="600"
              >
                Semester 2
              </Typography>
              <ul>
                <Stack direction="column" spacing={1}>
                  <li>C++ Language</li>
                  <li>OOPS using C#</li>
                  <li>Introduction to Bootstrap</li>
                  <li>Graphics Designing</li>
                </Stack>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                color="#3C3C3C"
                fontSize="16px"
                fontWeight="600"
              >
                Semester 3
              </Typography>
              <ul>
                <Stack direction="column" spacing={1}>
                  <li>Introduction to Bootstrap</li>
                  <li>Graphics Designing</li>
                </Stack>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                color="#3C3C3C"
                fontSize="16px"
                fontWeight="600"
              >
                Semester 4
              </Typography>
              <ul>
                <Stack direction="column" spacing={1}>
                  <li>Introduction to Bootstrap</li>
                  <li>Graphics Designing</li>
                </Stack>
              </ul>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Classes content
        </TabPanel>
        <TabPanel value={value} index={2}>
          Assignments content
        </TabPanel>
        <TabPanel value={value} index={3}>
          Quizzes content
        </TabPanel>
        <TabPanel value={value} index={4}>
          Exams content
        </TabPanel>
      </DialogContent>
    </Dialog>
  );
};

export { BatchDetailsDialog };
