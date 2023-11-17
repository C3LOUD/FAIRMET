import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default RootLayout;
