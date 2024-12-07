import { useNavigate } from "react-router-dom";
import TodoTaskList from "../components/forms/todoTask/todoTaskList";

export const Task = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-2xl text-red-600">Туду лист задач</p>
      <TodoTaskList />
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="bg-yellow-300 text-black px-2 py-1 rounded-md my-2"
      >
        Назад
      </button>
    </div>
  );
};
