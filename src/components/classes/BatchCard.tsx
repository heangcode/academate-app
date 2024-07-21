import React from "react";
import { Card, CardContent, Stack, Typography, Button } from "@mui/material";

interface BatchCardProps {
  generation: string;
  course: string;
  onClick: () => void;
}

const BatchCard: React.FC<BatchCardProps> = ({
  generation,
  course,
  onClick,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "5px",
        border: "1px solid #E6E6E6",
      }}
    >
      <CardContent>
        <Stack direction="column" spacing="30px">
          <Typography variant="h6" component="div">
            {`${generation} - Generations`}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {`Course: ${course}`}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "#fff",
              backgroundColor: "#3BB2D9",
              textTransform: "capitalize",
              borderRadius: "4px",
              width: "100%",
            }}
            onClick={onClick}
          >
            View Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export { BatchCard };
