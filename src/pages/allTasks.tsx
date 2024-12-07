import { useNavigate } from "react-router-dom";
import { routePaths } from "../lib/path";

export const AllTasks = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-2xl text-red-600">Все задачи</p>
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
