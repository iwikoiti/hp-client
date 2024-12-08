import { useNavigate } from "react-router-dom";
import VerifyForm from "../components/forms/verifyForm";
import Button from "../components/ui/Button";

export const Verification = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-2xl text-red-600">Код</p>
      <VerifyForm />
      <Button onClick={() => navigate(-1)}>Назад</Button>
    </div>
  );
};
