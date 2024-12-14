import React from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);

    const routes = [
      "/hotel/my_hotel/overview",
      "/hotel/my_hotel/restaurant",
      "/hotel/my_hotel/meals",
      "/hotel/my_hotel/orders",
      "/hotel/my_hotel/user_reviews",
    ];
    navigate(routes[newValue]);
  };

  return (
    <AppBar 
      position="static" 
      color="primary" 
      sx={{ width: "100%", boxShadow: "none", margin: 0, padding: 0 }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ textAlign: "left" }}>
            Hotel Management
          </Typography>
        </Box>
        <Tabs 
          value={value} 
          onChange={handleTabChange} 
          textColor="inherit" 
          indicatorColor="secondary"
          sx={{ flexGrow: 4, display: "flex", justifyContent: "space-evenly", padding: 1 }}
        >
          <Tab 
            label="Overview" 
            sx={{
              marginLeft: 45,
              marginRight: 10, 
              backgroundColor: value === 0 ? '#3f51b5' : 'Menu', 
              color: value === 0 ? 'white' : 'black',
              borderRadius: 2,
              padding: '8px 20px'
            }} 
          />
          <Tab 
            label="Restaurant" 
            sx={{
              marginRight: 10, 
              backgroundColor: value === 1 ? '#3f51b5' : 'Menu', 
              color: value === 1 ? 'white' : 'black',
              borderRadius: 2,
              padding: '8px 16px'
            }} 
          />
          <Tab 
            label="Meals" 
            sx={{
              marginRight: 10, 
              backgroundColor: value === 2 ? '#3f51b5' : 'Menu', 
              color: value === 2 ? 'white' : 'black',
              borderRadius: 2,
              padding: '8px 16px'
            }} 
          />
          <Tab 
            label="Orders" 
            sx={{
              marginRight: 10, 
              backgroundColor: value === 3 ? '#3f51b5' : 'Menu ', 
              color: value === 3 ? 'white' : 'black',
              borderRadius: 2,
              padding: '8px 16px'
            }} 
          />
          <Tab 
            label="User Reviews" 
            sx={{
              backgroundColor: value === 4 ? '#3f51b5' : 'Menu', 
              color: value === 4 ? 'white' : 'black',
              borderRadius: 2,
              padding: '8px 16px'
            }} 
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;



