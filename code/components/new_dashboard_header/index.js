import React from "react";
import { Link } from "react-router-dom";
import { cDashboardHeader } from "../dashboard_header/dashboard_header.scss";
import getRoutes, { ROUTE_NEWDASHBOARD_DETAIL } from "../../consts/routes";
import { withLocale } from "../../../modules/localization";

const NEWHeader = ({ locale }) => {
  const { __ } = locale;
  return (
    <div className={cDashboardHeader}>
      <h2>Welcome to NewDashboard</h2>
      <Link to={getRoutes(ROUTE_NEWDASHBOARD_DETAIL)}>{__("Detail")}</Link>
    </div>
  );
};

export default withLocale(NEWHeader);
