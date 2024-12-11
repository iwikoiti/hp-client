import { Outlet, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { ChevronLeft } from "lucide-react";
import { EllipsisVertical } from "lucide-react";

interface BaseLayoutProps {
  title: string;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ title }) => {
  const navigate = useNavigate(); // Hook для навигации
  return (
    <>
      <div className="sticky top-0 flex flex-row flex-auto items-center bg-custom-button-bg">
        <Button onClick={() => navigate(-1)} className="flex flex-row">
          <ChevronLeft />
        </Button>
        <p className="text-2xl m-auto">{title}</p>
        <Button>
          <EllipsisVertical />
        </Button>
      </div>
      <div className="p-3">
        <Outlet />
      </div>
    </>
  );
};
