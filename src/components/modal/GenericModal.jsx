import React from "react";
import { Modal, Box, Typography, Button, Stack } from "@mui/material";
import { green, red, yellow, blue } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import HelpIcon from "@mui/icons-material/Help";
import { CircularProgress } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#333",
  color: "#fff",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const GenericModal = ({
  open,
  onClose,
  type,
  message,
  onConfirm,
  isLoading,
}) => {
  const getColor = () => {
    switch (type) {
      case "success":
        return green[400];
      case "error":
        return red[400];
      case "alert":
        return yellow[700];
      case "confirmation":
        return blue[400];
      default:
        return "gray";
    }
  };

  const getTitle = () => {
    switch (type) {
      case "success":
        return "Success";
      case "error":
        return "Error";
      case "alert":
        return "Alert";
      case "confirmation":
        return "Confirmation";
      default:
        return "Notification";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircleIcon style={{ fontSize: 50, color: getColor() }} />;
      case "error":
        return <ErrorIcon style={{ fontSize: 50, color: getColor() }} />;
      case "alert":
        return <WarningIcon style={{ fontSize: 50, color: getColor() }} />;
      case "confirmation":
        return <HelpIcon style={{ fontSize: 50, color: getColor() }} />;
      default:
        return null;
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...style, border: `2px solid ${getColor()}` }}>
        {getIcon()}
        <Typography
          variant="h6"
          component="h2"
          sx={{ color: getColor(), mt: 2 }}
        >
          {getTitle()}
        </Typography>
        <Typography sx={{ mt: 2, textAlign: "center" }}>{message}</Typography>
        {type === "confirmation" ? (
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <Button
              variant="contained"
              onClick={onConfirm}
              sx={{ bgcolor: getColor(), "&:hover": { bgcolor: getColor() } }}
            >
              {isLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Confirm"
              )}
            </Button>
            <Button
              variant="contained"
              onClick={onClose}
              sx={{ bgcolor: red[400], "&:hover": { bgcolor: red[400] } }}
            >
              Cancel
            </Button>
          </Stack>
        ) : (
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              mt: 3,
              bgcolor: getColor(),
              "&:hover": { bgcolor: getColor() },
            }}
          >
            Close
          </Button>
        )}
      </Box>
    </Modal>
  );
};
