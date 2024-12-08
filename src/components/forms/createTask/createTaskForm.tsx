import { useNavigate } from "react-router-dom";
import { routePaths } from "../../../lib/path";
import CreateTaskElement, { CreateElementProps } from "./createTaskElement";
import Button from "../../ui/Button";

export default function CreateTaskForm() {
  const navigate = useNavigate();

  const testData: CreateElementProps[] = [
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
          <CreateTaskElement key={index} {...card} />
        ))}
      </div>

      <Button onClick={() => navigate(routePaths.allTasks)}>
        Опубликовать
      </Button>
    </div>
  );
}
