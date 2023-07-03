import { Outlet} from "react-router-dom";
import { useAuth } from "../../hooks";
import { LoadingPage } from "../LoadingPage";

export const ProtectedRoutes = () => {
  const { loading } = useAuth();

  if (loading) return <LoadingPage/>;

  return <Outlet/>
};
