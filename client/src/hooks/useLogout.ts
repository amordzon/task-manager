import { useNavigate } from "react-router";
import { useKeycloak } from "@react-keycloak/web";

const useLogout = () => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;

  const logOut = () => {
    keycloak.logout();
    navigate("/");
  };

  if (!isLoggedIn) {
    navigate("/");
  }

  return { isLoggedIn, logOut };
};

export default useLogout;
