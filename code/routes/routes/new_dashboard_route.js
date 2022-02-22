import Loadable from "react-loadable";

const NewDashboardRoute = Loadable({
  loader: () => import('../../pages/new_dashboard_page/new_dashboard_page' /* webpackChunkName: "route_newDashboard" */),
  loading: () => null
});

export default NewDashboardRoute;