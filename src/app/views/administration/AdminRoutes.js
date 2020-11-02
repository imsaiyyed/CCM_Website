import { MatxLoadable } from "matx";



const EditorForm = MatxLoadable({
  loader: () => import("./DealPermissions")
});

const adminRoutes = [
  {
    path: "/administration/deals",
    component: EditorForm
  }
];

export default adminRoutes;
