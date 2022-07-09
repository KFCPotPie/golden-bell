import { ArrowBackIcon, SettingsIcon } from "@chakra-ui/icons";
import { HStack, Text, VStack, IconButton, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TiWeatherCloudy } from "react-icons/ti";
import { Link } from "react-router-dom";

const Weather = () => {
  console.log("Weather", process.env.REACT_APP_WEATHER_API_KEY);
  return (
    <VStack spacing={0} height="100vh" p={2}>
      <HStack justifyContent="space-between" width="100%" flex={1} px={4}>
        <IconButton
          aria-label="back"
          icon={<ArrowBackIcon />}
          as={Link}
          to="/"
        />
        <HStack as={motion.div} layoutId="weather-text">
          <Icon as={TiWeatherCloudy} fontSize="4xl" />
          <Text fontSize="4xl">Weather</Text>
        </HStack>
        <IconButton
          aria-label="weather-settings"
          icon={<SettingsIcon />}
          as={Link}
          to="/settings/weather"
        />
      </HStack>
      <HStack spacing={4} p={2} flex={9} width="100%"></HStack>
    </VStack>
  );
};

export default Weather;
