import { useNavigate } from "react-router-dom";
import VolunteerForm from "../components/forms/volunteerForm";
import Button from "../components/ui/Button";

export const AddVolunteer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-2xl text-red-600">Волонтеры</p>
      <VolunteerForm />
      <Button onClick={() => navigate(-1)}>Назад</Button>
    </div>
  );
};
