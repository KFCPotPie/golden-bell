import { Button, VStack, Text, Icon, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TiWeatherCloudy } from "react-icons/ti";
import { Link } from "react-router-dom";
const WeatherButton = () => {
  return (
    <Button flex={1} height="100%" as={Link} to="/weather">
      <VStack spacing={2}>
        {/* change icon depending on current weather */}
        <HStack as={motion.div} layoutId="weather-text">
          <Icon as={TiWeatherCloudy} fontSize="4xl" />
          <Text fontSize="4xl">Weather</Text>
        </HStack>
      </VStack>
    </Button>
  );
};

export default WeatherButton;
