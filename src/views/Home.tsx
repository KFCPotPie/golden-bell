import { VStack, HStack, Text, Button } from "@chakra-ui/react";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import CalendarButton from "components/CalendarButton";
import CameraButton from "components/CameraButton";
import WeatherButton from "components/WeatherButton";
const Home = () => {
  return (
    <VStack spacing={0} height="100vh" p={2}>
      <HStack width="100%" flex={1} px={4} justifyContent="space-between">
        <Text fontSize="4xl">Dashboard</Text>
        <ColorModeSwitcher />
      </HStack>
      <HStack spacing={4} p={2} flex={3} width="100%">
        <WeatherButton />
        <CalendarButton />
        <CameraButton />
      </HStack>

      <HStack spacing={4} p={2} flex={3} width="100%">
        <Button flex={1} height="100%"></Button>
        <Button height="100%" flex={1}></Button>
        <Button height="100%" flex={1}></Button>
      </HStack>
      <HStack spacing={4} p={2} flex={3} width="100%">
        <Button flex={1} height="100%"></Button>
        <Button height="100%" flex={1}></Button>
        <Button height="100%" flex={1}></Button>
      </HStack>
    </VStack>
  );
};

export default Home;
