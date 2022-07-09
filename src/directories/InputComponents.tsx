import { Box, Button, Divider, Input, Stack, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import LoginLogoutButton from "components/LoginLogoutButton";
import useAuth from "hooks/useAuth";

const InputComponents = () => {
  const { auth } = useAuth();
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight={"semibold"} mb={4}>
        Text Input
      </Text>
      <Stack spacing={3}>
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="flushed" placeholder="Flushed" />
        <Input variant="unstyled" placeholder="Unstyled" />
      </Stack>
      <Divider my={4} />
      <Text fontSize="2xl" fontWeight={"semibold"} mb={4}>
        Buttons
      </Text>
      <Stack spacing={4} direction="row" align="center" py={2}>
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
      <Divider my={4} />
      <Text fontSize="2xl" fontWeight={"semibold"} mb={4}>
        Login / Logout
      </Text>
      <Box py={4}>
        <LoginLogoutButton />
      </Box>
      <Divider my={4} />
      <Text fontSize="2xl" fontWeight={"semibold"} mb={4}>
        ColorMode Switcher
      </Text>
      <Stack spacing={4} direction="column" align="center">
        <ColorModeSwitcher />
      </Stack>
    </Box>
  );
};

export default InputComponents;
