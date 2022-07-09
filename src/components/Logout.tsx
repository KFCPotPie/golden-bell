import useAuth from "hooks/useAuth";

const Logout = () => {
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
