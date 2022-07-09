import { ArrowBackIcon, SettingsIcon } from "@chakra-ui/icons";
import { HStack, Text, VStack, IconButton, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

const Camera = () => {
  return (
    <VStack spacing={0} height="100vh" p={2}>
      <HStack justifyContent="space-between" width="100%" flex={1} px={4}>
        <IconButton
          aria-label="back"
          icon={<ArrowBackIcon />}
          as={Link}
          to="/"
        />
        <HStack as={motion.div} layoutId="camera-text">
          <Icon as={FiCamera} fontSize="4xl" />
          <Text fontSize="4xl">Camera</Text>
        </HStack>
        <IconButton
          aria-label="weather-settings"
          icon={<SettingsIcon />}
          as={Link}
          to="/settings/camera"
        />
      </HStack>
      <HStack spacing={4} p={2} flex={9} width="100%">
        Content
      </HStack>
    </VStack>
  );
};

export default Camera;
