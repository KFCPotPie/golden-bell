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
  return (
    <Box p={10}>
      <Text fontSize="6xl">UiKit</Text>
      {/*  // insert description here of what a uikit is, separate the items in here into 
                tabs, input, display, typography, overlay, navigation
            */}
      <Text fontSize="2xl">This is a ui kit for the golden-bell project.</Text>

      <Tabs>
        <TabList>
          <Tab>Input</Tab>
          <Tab>Typography</Tab>
          <Tab>Display</Tab>

          <Tab>Overlay</Tab>
          <Tab>Navigation</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <InputComponents />
          </TabPanel>

          <TabPanel>
            <TypographyComponents />
          </TabPanel>
          {/* <TabPanel>
                        <DisplayComponents />
                    </TabPanel>
                    <TabPanel>
                        <OverlayComponents />
                    </TabPanel>
                    <TabPanel>
                        <NavigationComponents />
                    </TabPanel> */}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default UiKit;

const TypographyComponents = () => {
  return (
    <Box p={4}>
      <Text>
        Fonts: Verdana Bold/Regular Print: DINCond-Bold HELVETICA & Neue Std
      </Text>
    </Box>
  );
};
