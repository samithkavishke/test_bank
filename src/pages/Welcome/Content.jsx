import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import NewsBar from "./NewsBar";
import NavigationButtons from "./NavigationButtons";
import AboutUs from "./AboutUs";
import InterestRates from "./InterestRates";
import MaximizeSavings from "./MaximizeSavings";
import Cookies from "universal-cookie";

const Content = () => {
  const cookies = new Cookies();

  // Initialize user state and check if the user is authenticated
  const [user, setUser] = useState(null);
  const isAuthenticated = cookies.get("authenticated") === "true";

  // Example: User Login (set authentication cookie)
  const handleUserLogin = () => {
    cookies.set("authenticated", "true", { path: "/" });
    setUser({ username: "exampleUser" });
  };

  // Example: User Logout (remove authentication cookie)
  const handleUserLogout = () => {
    cookies.remove("authenticated", { path: "/" });
    setUser(null);
  };

  const sessionTimeoutDuration = 900000; // 60,000 milliseconds (1 minute)

  // Set the session timeout when the component mounts
  useEffect(() => {
    const sessionTimeout = setTimeout(() => {
      handleUserLogout();
      alert("Session timed out. You have been logged out.");
    }, sessionTimeoutDuration);

    return () => {
      clearTimeout(sessionTimeout); // Clear the session timeout on unmount
    };
  }, []); // Empty dependency array to run this effect once when the component mounts

  return (
    <Box sx={{ backgroundColor: "#151515", color: "#FFFFFF" }}>
      <Stack>
        <NewsBar />
        <NavigationButtons />
        <AboutUs />
        <InterestRates />
        <MaximizeSavings />
        
      </Stack>
    </Box>
  );
};

export default Content;
