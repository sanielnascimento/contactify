import { LoadingPage } from "../LoadingPage";
import { Outlet} from "react-router-dom";

import { useAuth } from "../../hooks";


export const ProtectedRoutes = () => {
  const { loading } = useAuth();

  if (loading) return <LoadingPage/>;

  return <Outlet/>
};
