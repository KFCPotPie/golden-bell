import { AnimateSharedLayout } from "framer-motion";
import useAuth from "hooks/useAuth";
import Login from "./Login";
import Logout from "./Logout";

const LoginLogoutButton = () => {
  const { auth } = useAuth();
  return (
    <AnimateSharedLayout>{!auth ? <Login /> : <Logout />}</AnimateSharedLayout>
  );
};

export default LoginLogoutButton;
