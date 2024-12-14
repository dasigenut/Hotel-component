import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function HotelReviews() {
  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 5 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://via.placeholder.com/600x300?text=User+Reviews"
        alt="User Reviews"
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          User Reviews
        </Typography>
        <Typography variant="body1">
          See what our guests have to say about their stay at our hotel and share your own experience.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HotelReviews;

