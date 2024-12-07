import { useNavigate } from "react-router-dom";
import { routePaths } from "../lib/path";
import TasksList from "../components/forms/allTasks/tasksList";

export const AllTasks = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate(routePaths.verification)}
        className="bg-yellow-300 text-black px-2 py-1 rounded-md my-2"
      >
        +
      </button>

      <p className="text-2xl text-red-600">Задачи</p>
      <TasksList />

      <button
        type="button"
        onClick={() => navigate(routePaths.home)}
        className="bg-yellow-300 text-black px-2 py-1 rounded-md my-2"
      >
        Назад
      </button>
    </div>
  );
};
