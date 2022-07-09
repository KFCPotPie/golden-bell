import { Box, Button, Stack, Text } from "@chakra-ui/react";

const InputComponents = () => {
    return (
        <Box p={10} border="solid red 2px">
            <Text fontSize="6xl">InputComponents</Text>
            {/* grab all of the inputs from chakra, button, checkbox, editable, icon button, number input, pin input */}
            <Stack spacing={4} direction="row" align="center">
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
        </Box>
    );
};

export default InputComponents;
