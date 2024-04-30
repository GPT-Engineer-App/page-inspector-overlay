import { Box, Flex, Input, Button, Text, VStack, HStack, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Menu, MenuButton, MenuItem, MenuList, Select } from "@chakra-ui/react";
import { FaBars, FaTimes, FaTag, FaList, FaMousePointer } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedElement, setSelectedElement] = useState(null);
  const [label, setLabel] = useState("");
  const [category, setCategory] = useState("");

  const handleElementClick = (element) => {
    setSelectedElement(element);
    setLabel("");
    setCategory("");
  };

  const saveLabel = () => {
    console.log(`Label: ${label}, Category: ${category}, Element: ${selectedElement}`);
    // Here you would typically update some state or store the label data
    onClose(); // Close the drawer after saving
  };

  return (
    <Box>
      <Flex bg="gray.100" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          Webpage Inspector
        </Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaMousePointer />} colorScheme="blue">
            Inspect
          </Button>
          <Button leftIcon={<FaList />} colorScheme="green">
            Elements
          </Button>
        </HStack>
      </Flex>
      <Flex>
        <IconButton icon={<FaBars />} variant="outline" onClick={onOpen} aria-label="Open Menu" />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Tools & Features</DrawerHeader>
            <DrawerBody>
              <VStack align="stretch" p={2}>
                <Button leftIcon={<FaTag />} onClick={() => handleElementClick("Element1")}>
                  Label Element 1
                </Button>
                <Button leftIcon={<FaTag />} onClick={() => handleElementClick("Element2")}>
                  Label Element 2
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box flex="1" p={4}>
          <Text mb={2}>Main Content Area</Text>
          {/* Simulated content area */}
          <Box border="2px dashed blue" p={4}>
            <Text>Webpage content goes here...</Text>
          </Box>
        </Box>
      </Flex>
      {selectedElement && (
        <Menu>
          <MenuButton as={Button} rightIcon={<FaTimes />} onClick={() => setSelectedElement(null)}>
            Close Labeling
          </MenuButton>
          <MenuList>
            <MenuItem>
              <VStack p={4} spacing={4}>
                <Input placeholder="Label" value={label} onChange={(e) => setLabel(e.target.value)} />
                <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                </Select>
                <Button colorScheme="blue" onClick={saveLabel}>
                  Save Label
                </Button>
              </VStack>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Box>
  );
};

export default Index;
