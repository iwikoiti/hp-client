import { AddVolunteer } from "../pages/addVolunteer";
import { AllTasks } from "../pages/allTasks";
import { CreateTasks } from "../pages/createTasks";
import { MainPage } from "../pages/mainPage";
import { Task } from "../pages/task";
import { Verification } from "../pages/verification";
import { routePaths } from "./path";

type RoutePropsData = {
  protected: boolean;
  routes: { path: string; Component: React.FC }[];
};

const unprotectedRoutes: RoutePropsData = {
  protected: false,
  routes: [
    { path: routePaths.home, Component: MainPage },
    { path: routePaths.allTasks, Component: AllTasks },
    { path: routePaths.createTasks, Component: CreateTasks },
    { path: routePaths.task, Component: Task },
    { path: routePaths.addVolunteer, Component: AddVolunteer },
    { path: routePaths.verification, Component: Verification },
  ],
};

export { unprotectedRoutes };
