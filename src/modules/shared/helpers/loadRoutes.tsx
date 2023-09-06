import { Route } from "react-router-dom";

export const loadRoutes = (routes) => {
    return routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
    ))
};