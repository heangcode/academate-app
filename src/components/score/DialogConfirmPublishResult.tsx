import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface DialogConfirmPublishResultProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

const DialogConfirmPublishResult: React.FC<DialogConfirmPublishResultProps> = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h6" fontWeight="600" textAlign="center">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" textAlign="center">
          {description}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", paddingBottom: "24px" }}>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{ marginRight: "16px" }}
        >
          No
        </Button>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          Publish
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { DialogConfirmPublishResult };
