import { useNavigate } from "react-router-dom";
import { routePaths } from "../lib/path";
import TasksList from "../components/forms/allTasks/tasksList";
import Button from "../components/ui/Button";
import { Plus } from "lucide-react";

export const AllTasks = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-4">
        <TasksList />
        <Button
          onClick={() => navigate(routePaths.verification)}
          className="fixed bottom-4 right-4 !p-4 rounded-full shadow-lg"
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
};
