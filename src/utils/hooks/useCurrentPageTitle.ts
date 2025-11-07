import { useEffect } from "react";
import { useRouteLabel } from "./useRouteLabel";

export const useCurrentPageTitle = () => {
    const label = useRouteLabel();

    console.log({ label });

    useEffect(() => {
        document.title = label ?? "";
    }, [location.pathname]);
};
