import HomeRoute from "./routes/home_route";
import DashboardSettingsRoute from "./routes/dashboard_settings_route";
import DashboardProfileRoute from "./routes/dashboard_profile_route";
import NewDashboardDetailsRoute from "./routes/new_dashboard_detail_route";
import LoginRoute from "./routes/login_route";

import NotFoundRoute from "./routes/not_found_route";

import CleanLayout from "../layouts/clean_layout";
import DashboardLayout from "../layouts/dashboard_layout";
import NewDashboardLayout from "../layouts/new_dashboard_layout";
import getRoutes, {
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_DASHBOARD,
  ROUTE_DASHBOARD_SETTINGS,
  ROUTE_DASHBOARD_PROFILE,
  ROUTE_NEWDASHBOARD,
  ROUTE_NEWDASHBOARD_DETAIL
} from "../consts/routes";

const getPath = (key) => getRoutes(key, {}, "", ":localeCode?/");

const routes = [
  {
    path: getPath(ROUTE_HOME),
    exact: true,
    strict: true,
    component: HomeRoute,
    layout: CleanLayout
  },
  {
    path: getPath(ROUTE_LOGIN),
    component: LoginRoute,
    layout: CleanLayout
  },
  {
    path: getPath(ROUTE_DASHBOARD),
    layout: CleanLayout,
    routes: [
      {
        path: getPath(ROUTE_DASHBOARD),
        layout: DashboardLayout,
        routes: [
          {
            path: getPath(ROUTE_DASHBOARD_SETTINGS),
            component: DashboardSettingsRoute
          },
          {
            path: getPath(ROUTE_DASHBOARD_PROFILE),
            component: DashboardProfileRoute
          }
        ]
      }
    ]
  },
  {
    path: getPath(ROUTE_NEWDASHBOARD),
    layout: CleanLayout,
    routes: [
      {
        path: getPath(ROUTE_NEWDASHBOARD),
        layout: NewDashboardLayout,
        routes: [
          {
            path: getPath(ROUTE_NEWDASHBOARD_DETAIL),
            component: NewDashboardDetailsRoute
          }
        ]
      }
    ]
  },
  {
    path: "",
    component: NotFoundRoute
  }
];

export default routes;
