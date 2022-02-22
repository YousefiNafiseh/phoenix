import React from "react";
import NewHeader from "../../components/new_dashboard_header";

const NewDashboardLayout = ({ children }) => {
  return (
    <>
      <div>
        <NewHeader />
      </div>
      <div>{children}</div>
    </>
  );
};

export default NewDashboardLayout;
