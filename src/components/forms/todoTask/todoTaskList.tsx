import { useNavigate } from "react-router-dom";
import { routePaths } from "../../../lib/path";
import TodoTaskElement, { TodoElementProps } from "./todoTaskElement";
import Button from "../../ui/Button";

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

      <Button onClick={() => navigate(routePaths.allTasks)}>Принять</Button>
    </div>
  );
}
