import Loadable from "react-loadable";

const NewDashboardRoute = Loadable({
  loader: () =>
    import(
      "../../pages/new_dashboard_page/new_dashboard_detail_page" /* webpackChunkName: "route_newDashboard_detail" */
    ),
  loading: () => null
});

export default NewDashboardRoute;
