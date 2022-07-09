import { CalendarIcon } from "@chakra-ui/icons";
import { Button, VStack, Text, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CalendarButton = () => {
  return (
    <Button height="100%" flex={1} as={Link} to="/calendar">
      <VStack spacing={2}>
        <HStack as={motion.div} layoutId="calendar-text">
          <CalendarIcon fontSize="4xl" />
          <Text fontSize="4xl">Calendar</Text>
        </HStack>
        <Text fontSize="lg" decoration={"underline"}>
          Upcoming events
        </Text>
        <Text fontSize="md">8:00 AM Daily Standup</Text>
        <Text fontSize="md">9:00 AM Daily Standup</Text>
        <Text fontSize="md">10:00 AM Daily Standup</Text>
      </VStack>
    </Button>
  );
};
export default CalendarButton;
