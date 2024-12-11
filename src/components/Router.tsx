import { Navigate, Route, Routes } from "react-router-dom";
import { unprotectedRoutes } from "../lib/routes";
import { linksPaths } from "../lib/path";
import { BaseLayout } from "../layouts/BaseLayout";

export default function Router() {
  return (
    <Routes>
      {unprotectedRoutes.routes.map((route, index) => (
        <Route element={<BaseLayout title={route.title} />}>
          <Route
            key={index}
            path={route.path}
            element={<route.Component />}
          ></Route>
        </Route>
      ))}
      <Route path="*" element={<Navigate to={linksPaths.home} />}></Route>
    </Routes>
  );
}
