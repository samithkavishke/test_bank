import React from "react";
import { Stack } from "@mui/material";
import NavigationButton from "./NavigationButton";
import { useNavigate } from "react-router-dom"

const NavigationButtons = () => {
  const navigate = useNavigate()
  const scrollToRates = () => {
    const ratesSection = document.getElementById("interestrates");
    if (ratesSection) {
      ratesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToreachUs = () => {
    const reachUsSection = document.getElementById("contactus");
    if (reachUsSection) {
      reachUsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center" paddingTop="20px">
      {/* <NavigationButton title="Dashboard" src="dashboard" /> */}
      <NavigationButton title="Transaction" src="transaction" onClick={() => navigate("/account")}/>
      <button
        onClick={scrollToRates}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "white",
          padding: 0,
          fontSize: "inherit",
        }}
      >
        <NavigationButton title="Plan And Rates" src="plans_and_rates" />
      </button>
      <button
        onClick={scrollToreachUs}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "white",
          padding: 0,
          fontSize: "inherit",
        }}
      >
      <NavigationButton title="Contact Us" src="contact_us" />
      </button>
    </Stack>
  );
};

export default NavigationButtons;
