import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function HotelOverview() {
  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 5 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://via.placeholder.com/600x300?text=Hotel+Overview"
        alt="Hotel Overview"
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Hotel Overview
        </Typography>
        <Typography variant="body1">
          Welcome to our luxurious hotel, where elegance meets comfort. Enjoy our premium services and stunning surroundings for an unforgettable experience.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HotelOverview;

