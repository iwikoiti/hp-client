import { useNavigate } from "react-router-dom";
import TodoTaskList from "../components/forms/todoTask/todoTaskList";
import Button from "../components/ui/Button";

export const Task = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-2xl text-red-600">Туду лист задач</p>
      <TodoTaskList />
      <Button onClick={() => navigate(-1)}>Назад</Button>
    </div>
  );
};
