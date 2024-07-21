import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  InputBase,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import Layout from "../components/Layout";
import { Add as AddIcon, Search as SearchIcon } from "@mui/icons-material";
import { batches, classes } from "../data/ClassesData";
import { BatchCard, BatchDetailsDialog, ClassCard } from "../components";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Classes: React.FC = () => {
  const [value, setValue] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState({
    generation: "",
    course: "",
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleOpenDialog = (generation: string, course: string) => {
    setSelectedBatch({ generation, course });
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

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
            Classes
          </Typography>
          <Typography variant="body1" color="#919499" fontSize="16px">
            Manage and organize your generations{" "}
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
            Create Generation
          </Button>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="#434343" fontSize="20px">
          Batches details
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          mb={3}
          sx={{
            width: "379px",
            height: "40px",
            bgcolor: "#F1F1F1",
            borderRadius: "5px",
          }}
        >
          <SearchIcon sx={{ color: "gray", ml: 1 }} />
          <InputBase placeholder="Search..." sx={{ ml: 1, flex: 1 }} />
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Batches" />
          <Tab label="Classes" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {batches.map((batch) => (
            <Grid item xs={12} sm={6} md={4} key={batch.id}>
              <BatchCard
                generation={batch.generation}
                course={batch.course}
                onClick={() => handleOpenDialog(batch.generation, batch.course)}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          {classes.map((cls) => (
            <Grid item xs={12} sm={6} md={4} key={cls.id}>
              <ClassCard
                title={cls.title}
                classroom={cls.classroom}
                time={cls.time}
                date={cls.date}
                status={cls.status}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <BatchDetailsDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        generation={selectedBatch.generation}
        course={selectedBatch.course}
      />
    </Layout>
  );
};

export { Classes };
