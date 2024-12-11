import { AddVolunteer } from "../pages/addVolunteer";
import { AllTasks } from "../pages/allTasks";
import { CreateTasks } from "../pages/createTasks";
import { MainPage } from "../pages/mainPage";
import { Task } from "../pages/task";
import { Verification } from "../pages/verification";
import { routePaths } from "./path";

type RoutePropsData = {
  protected: boolean;
  routes: { path: string; Component: React.FC; title: string }[];
};

const unprotectedRoutes: RoutePropsData = {
  protected: false,
  routes: [
    { path: routePaths.home, Component: MainPage, title: "Главная" },
    { path: routePaths.allTasks, Component: AllTasks, title: "Задачи" },
    {
      path: routePaths.createTasks,
      Component: CreateTasks,
      title: "Создание задачи",
    },
    { path: routePaths.task, Component: Task, title: "Задача" },
    {
      path: routePaths.addVolunteer,
      Component: AddVolunteer,
      title: "Ваши данные",
    },
    { path: routePaths.verification, Component: Verification, title: "Код" },
  ],
};

export { unprotectedRoutes };
