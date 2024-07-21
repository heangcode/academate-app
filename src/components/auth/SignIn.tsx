import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    // Add authentication logic here
    navigate("/dashboard");
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
        <CssBaseline />
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
              Sign in
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              sx={{ mb: 2, mt: 2 }}
            >
              <Typography sx={{ color: "#666666", fontSize: "16px" }}>
                Email or phone number
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Enter your Email/phone number"
                name="email"
                autoComplete="email"
                InputProps={{
                  sx: { borderRadius: "12px" },
                }}
              />
            </Box>

            <Box display="flex" flexDirection="column" alignItems="start">
              <Typography sx={{ color: "#666666", fontSize: "16px" }}>
                Password
              </Typography>
              <FormControl
                variant="outlined"
                fullWidth
                margin="normal"
                required
              >
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{
                    borderRadius: "12px",
                    "& fieldset": { borderRadius: "12px" },
                  }}
                />
              </FormControl>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={
                  <Checkbox size="small" value="remember" color="primary" />
                }
                label="Remember me"
              />
              <Link
                onClick={() => navigate("/forgot-password")}
                variant="body2"
                sx={{
                  color: "#333333",
                  textDecorationColor: "#333333",
                  textUnderlineOffset: "8px",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </Link>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                mb: 2,
                textTransform: "capitalize",
                color: "white",
                borderRadius: 10,
              }}
            >
              Log in
            </Button>
            <Grid
              container
              sx={{
                mt: 2,
              }}
            >
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  sx={{
                    color: "#333333",
                    textDecorationColor: "#333333",
                    textUnderlineOffset: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Other issue with sign in
                </Link>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{ mt: 2 }}
            >
              By continuing, you agree to the <Link href="#">Terms of use</Link>{" "}
              and <Link href="#">Privacy Policy</Link>.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export { SignIn };
