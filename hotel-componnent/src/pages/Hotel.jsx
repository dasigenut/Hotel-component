import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Hotel() {
  const { my_hotel } = useParams();
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to {my_hotel}!
      </Typography>
      <Typography variant="body1">
        Select a tab above to explore more information about the hotel.
      </Typography>
    </Box>
  );
}

export default Hotel;


