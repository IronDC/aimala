import React from "react";
import { useUser } from "./authService";
//https://reacttraining.com/react-router/web/guides/quick-start
import { Redirect } from "react-router-dom";

export const withProtected = (
  Component,
  { redirect = true, redirectTo = "/" } = {} // options are always present
) => (props) => {
  const user = useUser();
  if (user) {
    // If we have a user, then render the component
    return <Component />;
  } else {
        return <Redirect to={redirectTo} />;
      }
    };
export default withProtected;    
