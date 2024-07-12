import Login from "@/components/login";
import React, { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
};

export default LoginPage;
