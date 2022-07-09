import { Button, VStack, HStack, Text, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

const CameraButton = () => {
  return (
    <Button flex={1} height="100%" as={Link} to="/camera">
      <VStack spacing={2}>
        {/* change icon depending on current weather */}
        <HStack as={motion.div} layoutId="camera-text">
          <Icon as={FiCamera} fontSize="4xl" />
          <Text fontSize="4xl">Camera</Text>
        </HStack>
      </VStack>
    </Button>
  );
};
export default CameraButton;
