import React from "react";
import Button from "@material-ui/core/Button";

const HomePage = () => {
  return (
    <>
      <h1>IronProfile</h1>
      <p>
        App lab-profile-app
        <strong>A lo loco!!!!</strong>
      </p>
      <div>
        <Button variant="contained" color="primary">
          SignUp
        </Button>
      </div>
    </>
  );
};

export default HomePage;
