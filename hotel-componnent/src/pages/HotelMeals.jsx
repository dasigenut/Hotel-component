import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function HotelMeals() {
  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 5 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://via.placeholder.com/600x300?text=Hotel+Meals"
        alt="Hotel Meals"
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Meals Information
        </Typography>
        <Typography variant="body1">
          Explore our diverse menu options, including breakfast, lunch, and dinner. Enjoy meals tailored to your taste.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HotelMeals;

