import { useNavigate } from "react-router-dom";
import CreateTaskForm from "../components/forms/createTask/createTaskForm";
import Button from "../components/ui/Button";

export const CreateTasks = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-2xl text-red-600">Создание задач</p>
      <CreateTaskForm />
      <Button onClick={() => navigate(-1)}>Назад</Button>
    </div>
  );
};
