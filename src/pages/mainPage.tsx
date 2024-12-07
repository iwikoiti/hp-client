import { useNavigate } from "react-router-dom";
import { routePaths } from "../lib/path";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-2xl text-red-600">Главная</p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => navigate(routePaths.allTasks)}
          className="bg-yellow-300 text-black px-2 py-1 rounded-md"
        >
          Все задачи
        </button>
        <button
          type="button"
          onClick={() => navigate(routePaths.createTasks)}
          className="bg-yellow-300 text-black px-2 py-1 rounded-md"
        >
          Создать задачу
        </button>
        <button
          type="button"
          onClick={() => navigate(routePaths.task)}
          className="bg-yellow-300 text-black px-2 py-1 rounded-md"
        >
          Задача
        </button>
        <button
          type="button"
          onClick={() => navigate(routePaths.verification)}
          className="bg-yellow-300 text-black px-2 py-1 rounded-md"
        >
          Код
        </button>
        <button
          type="button"
          onClick={() => navigate(routePaths.addVolunteer)}
          className="bg-yellow-300 text-black px-2 py-1 rounded-md"
        >
          Добавить волонтера
        </button>
      </div>
    </div>
  );
};
