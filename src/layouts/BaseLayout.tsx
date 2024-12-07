import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <>
      <div className="p-3">
        <Outlet />
      </div>
    </>
  );
};
