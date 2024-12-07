import { useNavigate } from "react-router-dom";
import { routePaths } from "../../../lib/path";
import TodoTaskElement, { TodoElementProps } from "./todoTaskElement";

export default function TodoTaskList() {
  const navigate = useNavigate();

  const testData: TodoElementProps[] = [
    {
      number: "1.",
      description: "Погулять с собакой",
    },
    {
      number: "2.",
      description: "Погулять с собакой",
    },
  ];
  return (
    <div>
      <div className="grid gap-y-2">
        {testData.map((card, index) => (
          <TodoTaskElement key={index} {...card} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => navigate(routePaths.allTasks)}
        className="bg-yellow-300 text-black px-2 py-1 rounded-md my-2"
      >
        Принять
      </button>
    </div>
  );
}
