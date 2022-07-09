import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "hooks/useAuth";
import { UserProvider } from "hooks/useUser";
import AppRoutes from "directories/AppRoutes";

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <AuthProvider>
                <UserProvider>
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>
                </UserProvider>
            </AuthProvider>
        </ChakraProvider>
    );
};
