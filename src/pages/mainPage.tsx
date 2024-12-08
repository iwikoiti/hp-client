import { useNavigate } from "react-router-dom";
import { routePaths } from "../lib/path";
import Button from "../components/ui/Button";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-2xl text-red-600">Главная</p>
      <div className="flex gap-2">
        <Button onClick={() => navigate(routePaths.allTasks)}>
          Все задачи
        </Button>
        <Button onClick={() => navigate(routePaths.createTasks)}>
          Создать задачу
        </Button>
        <Button onClick={() => navigate(routePaths.task)}>Задача</Button>
        <Button onClick={() => navigate(routePaths.verification)}>Код</Button>
        <Button onClick={() => navigate(routePaths.addVolunteer)}>
          Добавить волонтера
        </Button>
      </div>
    </div>
  );
};
