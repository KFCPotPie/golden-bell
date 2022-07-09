import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import useAuth from "hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(username, password);
    } catch (e: any) {
      setError(e.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Popover returnFocusOnClose={false} isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <Button
            as={motion.div}
            layoutId="auth-button"
            colorScheme="teal"
            onClick={onToggle}
            variant={!isOpen ? "solid" : "outline"}
            rightIcon={isOpen ? <CloseIcon /> : undefined}
          >
            {isOpen ? "Close" : "Login"}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <Box p={4}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="left">
                <Input
                  variant="outline"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  variant="outline"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent={"space-between"}
                >
                  <Button type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Login"}
                  </Button>
                  <Button disabled={loading}>Sign up</Button>
                </Stack>
              </VStack>
              {error && <div>{error}</div>}
            </form>
          </Box>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Login;
