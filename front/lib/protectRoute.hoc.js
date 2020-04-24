import React from "react";
import { useUser } from "./authService";
import { Redirect } from "react-router-dom";

export const withProtected = (
  Component,
  { redirect = true, redirectTo = "/" } = {} 
) => (props) => {
  const user = useUser();
  if (user) {
    return <Component />;
  } else {
        return <Redirect to={redirectTo} />;
      }
    };
export default withProtected;    
