import { useNavigate } from "react-router-dom";
import { routePaths } from "../lib/path";

export const AddVolunteer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-2xl text-red-600">Волонтеры</p>
      <button
        type="button"
        onClick={() => navigate(routePaths.home)}
        className="bg-yellow-300 text-black px-2 py-1 rounded-md"
      >
        Назад
      </button>
    </div>
  );
};
