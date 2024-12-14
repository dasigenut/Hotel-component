import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function HotelOrders() {
  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 5 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://via.placeholder.com/600x300?text=Hotel+Orders"
        alt="Hotel Orders"
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Orders Information
        </Typography>
        <Typography variant="body1">
          Manage your orders here, including room service, event bookings, and more.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HotelOrders;

