import { appRoutes } from "@/routes/routes";
import { useLocation } from "react-router-dom";

export const useRouteLabel = () => {
    const location = useLocation();

    const current = appRoutes.find((r) => r.path === location.pathname);

    return current?.name;
};
