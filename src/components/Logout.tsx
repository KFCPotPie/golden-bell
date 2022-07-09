import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useAuth from "hooks/useAuth";

const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Button
      onClick={handleLogout}
      colorScheme="red"
      as={motion.div}
      layoutId="auth-button"
    >
      Logout
    </Button>
  );
};

export default Logout;
