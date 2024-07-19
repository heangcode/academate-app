import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  TextField,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DialogConfirmPublishResult from "./DialogConfirmPublishResult";

interface DeclareResultDialogProps {
  open: boolean;
  onClose: () => void;
}

const CustomTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
});

const CustomTab = styled(Tab)({
  textTransform: "none",
  minWidth: 72,
  fontWeight: 600,
  marginRight: 4,
  "&.Mui-selected": {
    color: "#FFFFFF",
    backgroundColor: "#2A9DF4",
    borderRadius: "5px 5px 0 0",
  },
  "&:hover": {
    color: "#2A9DF4",
    opacity: 1,
  },
  "&:focus": {
    color: "#2A9DF4",
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
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
};

const DeclareResultDialog: React.FC<DeclareResultDialogProps> = ({
  open,
  onClose,
}) => {
  const [tabIndex, setTabIndex] = useState(1); // Set default tab to "Result"
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const handlePublishClick = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const handleConfirmPublish = () => {
    // Handle the publish action here
    setConfirmOpen(false);
    // onClose(); // Close the DeclareResultDialog after publishing
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <DialogTitle color="#474747" fontSize="32px" fontWeight="600">
            Declare Result
          </DialogTitle>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              bgcolor: "#3BB2D9",
              color: "white",
              borderRadius: "5px",
              mr: "10px",
            }}
            onClick={handlePublishClick}
          >
            Publish Result
          </Button>
          {/* <Typography
            fontSize="14px"
            bgcolor="#C8E4FA"
            borderRadius="5px"
            color="#3D70F5"
            px="13px"
            py="4px"
          >
            Result Declared on 12:30 AM | 22 September 2023{" "}
          </Typography> */}
        </Box>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            BHI Health Informatics mid semester Exam.
          </Typography>
          <CustomTabs value={tabIndex} onChange={handleTabChange}>
            <CustomTab label="Details" />
            <CustomTab label="Result" />
          </CustomTabs>
          <TabPanel value={tabIndex} index={0}>
            <Typography>Details Content</Typography>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Box mt={2}>
              <TableContainer>
                <Table sx={{ border: "1px solid #D9D9D9" }}>
                  <TableHead
                    sx={{ border: "1px solid #D9D9D9", bgcolor: "#F1F1F1" }}
                  >
                    <TableRow>
                      <TableCell>Student ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Attachments</TableCell>
                      <TableCell>Marks</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[...Array(10)].map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>TIPS GRM1012223</TableCell>
                        <TableCell>Sokun Sonamheng</TableCell>
                        <TableCell>
                          <Typography
                            sx={{
                              border: "1px solid #D7D7D7",
                              borderRadius: "5px",
                              px: "15px",
                              py: "7px",
                            }}
                            fontSize="14px"
                            textAlign="center"
                          >
                            Networking Mid....pdf
                          </Typography>
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
                            />
                            /50
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Stack direction="row" spacing={1}>
                            <Button
                              size="small"
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
                            >
                              +Add Note
                            </Button>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                marginLeft: "8px",
                                backgroundColor: "#007BFF",
                                color: "#fff",
                                textTransform: "capitalize",
                                borderRadius: "5px",
                              }}
                            >
                              Save
                            </Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </TabPanel>
        </DialogContent>
      </Dialog>
      <DialogConfirmPublishResult
        open={confirmOpen}
        onClose={handleConfirmClose}
        onConfirm={handleConfirmPublish}
        title="Publish Result of “BHI Health Informatics mid semester Exam.” ?"
        description="Result once published cannot be altered/reversed"
      />
    </>
  );
};

export default DeclareResultDialog;
