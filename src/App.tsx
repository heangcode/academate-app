import React from "react";
import { Box } from "@mui/material";
import SignIn from "./components/SignIn";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#31708E",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignIn />
    </Box>
  );
};

export default App;
