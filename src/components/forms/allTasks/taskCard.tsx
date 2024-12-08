import { useNavigate } from "react-router-dom";
import { routePaths } from "../../../lib/path";
import Button from "../../ui/Button";

export interface CardProps {
  title: string;
  description: string;
}

export default function TaskCard(cardProps: CardProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className="border rounded-md p-4">
        <p className="text-xl leading-6 mb-2">{cardProps.title}</p>
        <p className="text-base leading-6 mb-4">{cardProps.description}</p>
        <Button
          onClick={() => navigate(routePaths.addVolunteer)}
          className="w-full"
        >
          Взять
        </Button>
      </div>
    </>
  );
}
