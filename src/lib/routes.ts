import { AllTasks } from "../pages/AllTasks";
import { routePaths } from "./path";

type RoutePropsData = {
  protected: boolean;
  routes: { path: string; Component: React.FC }[];
};

const unprotectedRoutes: RoutePropsData = {
  protected: false,
  routes: [{ path: routePaths.home, Component: AllTasks }],
};

export { unprotectedRoutes };
