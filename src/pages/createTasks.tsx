import { useNavigate } from "react-router-dom";
import CreateTaskForm from "../components/forms/createTask/createTaskForm";

export const CreateTasks = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-2xl text-red-600">Создание задач</p>
      <CreateTaskForm />
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
