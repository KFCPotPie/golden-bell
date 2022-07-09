import useAuth from "hooks/useAuth";
import Login from "./Login";
import Logout from "./Logout";

const LoginLogoutButton = () => {
    const { auth } = useAuth();
    return <>{!auth ? <Login /> : <Logout />}</>;
};

export default LoginLogoutButton;
