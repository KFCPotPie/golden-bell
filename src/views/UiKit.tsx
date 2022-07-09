import { ColorModeSwitcher } from "ColorModeSwitcher";
import LoginLogoutButton from "components/LoginLogoutButton";
import useAuth from "hooks/useAuth";
import {
    Box,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import InputComponents from "directories/InputComponents";

const UiKit = () => {
    const { auth } = useAuth();
    return (
        <Box p={10} border="solid red 2px">
            <Text fontSize="6xl">UiKit</Text>
            {/*  // insert description here of what a uikit is, separate the items in here into 
                tabs, input, display, typography, overlay, navigation
            */}
            <Text fontSize="2xl">
                This is a ui kit for the golden-bell project. Fonts: Verdana
                Bold/Regular Print: DINCond-Bold HELVETICA & Neue Std
            </Text>
            <p>{auth ? "Logged in" : "Not logged in"}</p>
            <LoginLogoutButton />
            <ColorModeSwitcher />

            <Tabs>
                <TabList>
                    <Tab>Input</Tab>
                    <Tab>Display</Tab>
                    <Tab>Typography</Tab>
                    <Tab>Overlay</Tab>
                    <Tab>Navigation</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <InputComponents />
                    </TabPanel>
                    {/* <TabPanel>
                        <Displays />
                    </TabPanel>
                    <TabPanel>
                        <Typography />
                    </TabPanel>
                    <TabPanel>
                        <Overlays />
                    </TabPanel>
                    <TabPanel>
                        <Navigation />
                    </TabPanel> */}
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default UiKit;
