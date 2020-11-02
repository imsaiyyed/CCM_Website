import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Analytics = MatxLoadable({
  loader: () => import("./DealManagement")
})

const DealDetails = MatxLoadable({
  loader: () => import("./DealDetails")
})

const dealRoutes = [
  {
    path: "/deals/management",
    component: Analytics,
    auth: authRoles.admin
  },
  {
    path: "/deals/details",
    component: DealDetails,
    auth: authRoles.admin
  }
];

export default dealRoutes;
