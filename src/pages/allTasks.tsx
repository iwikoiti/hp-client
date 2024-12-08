import { useNavigate } from "react-router-dom";
import { routePaths } from "../lib/path";
import TasksList from "../components/forms/allTasks/tasksList";
import Button from "../components/ui/Button";

export const AllTasks = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(routePaths.verification)}>+</Button>

      <p className="text-2xl text-red-600">Задачи</p>
      <TasksList />

      <Button onClick={() => navigate(-1)}>Назад</Button>
    </div>
  );
};
