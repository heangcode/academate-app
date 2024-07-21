import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
    // Add your forgot password logic here

    // Navigate to the Reset Password page
    navigate("/reset-password");
  };

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
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "white",
            padding: { xs: 3, sm: 4 },
            borderRadius: "24px",
            boxShadow: "0 3px 5px rgba(0,0,0,0.1)",
          }}
        >
          <img src="/academate-logo.png" alt="academate-logo" width={100} />

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            width="100%"
            sx={{
              mt: 1,
              border: "1px solid #ddd",
              borderRadius: "24px",
              padding: "25px",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              textAlign="center"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
            >
              Forgot Password
            </Typography>
            <Typography
              sx={{
                mt: 2,
                mb: 2,
                color: "#666666",
                fontSize: { xs: "14px", sm: "16px" },
                textAlign: "center",
              }}
            >
              Enter the email address you used when you joined and we’ll send
              you a code to reset your password.
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              sx={{ mt: 2 }}
            >
              <Typography sx={{ color: "#111111", fontSize: "16px", mb: -1 }}>
                Email
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Enter your Email"
                name="email"
                autoComplete="email"
                InputProps={{
                  sx: { borderRadius: "12px" },
                }}
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 3,
                mb: 2,
                textTransform: "capitalize",
                color: "white",
                borderRadius: 10,
              }}
            >
              Continue
            </Button>
            <Link
              onClick={() => navigate("/")}
              sx={{
                color: "#333333",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                cursor: "pointer",
                marginTop: "100px",
              }}
            >
              &larr; Back
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export { ForgotPassword };
