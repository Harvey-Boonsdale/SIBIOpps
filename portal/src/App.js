import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";
import RegistrationForm from "./RegistrationForm";
import ThankYou from "./ThankYou";

// initialise properties of opportunity card

function App() {
  const client = new ApiClient();

  // error message

  const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return true;
    } else {
      return false;
    }
  };

  // Gets info from server and puts it in state

  const [opportunities, changeOpportunities] = useState([]);

  const listOpportunities = () => {
    client.listOpportunities().then((response) => {
      let success = checkStatus(response);
      if (!success) {
        alert("Error connecting - please try again");
        return;
      }

      changeOpportunities(response.data);
    });
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              listOpportunities={listOpportunities}
              opportunities={opportunities}
              client={client}
            />
          }
        />
        <Route
          path="/registration/:id"
          element={<RegistrationForm opportunities={opportunities} />}
        />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </>
  );
}

export default App;
