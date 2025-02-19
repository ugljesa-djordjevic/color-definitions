import { Route, Routes as RouterRoutes } from "react-router-dom"
import { Home } from "../modules/core/pages/Home";
import { NotFound } from "../modules/core/pages/NotFound";
import { StandardLayout } from "../modules/shared/layouts/StandardLayout";



export const Routes = () => {
  return (
    <RouterRoutes>
        <Route element={<StandardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </RouterRoutes>
  );
};
