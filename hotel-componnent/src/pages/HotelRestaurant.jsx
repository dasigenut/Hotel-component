import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function HotelRestaurant() {
  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 5 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://via.placeholder.com/600x300?text=Hotel+Restaurant"
        alt="Hotel Restaurant"
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Restaurant Information
        </Typography>
        <Typography variant="body1">
          Our gourmet restaurant offers an exquisite menu featuring dishes made from the freshest ingredients, crafted by our top chefs.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HotelRestaurant;

