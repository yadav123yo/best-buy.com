import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  Select,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { Link, useNavigate } from "react-router-dom";

export const CheckOut = () => {
  const navigate=useNavigate();

  const PlaceOrder = () => {
    alert("Order Successful. Have a happy day.  Keep Shopping With us.")
    navigate('/')
  };
  return (
    <Center>
      {/* <Heading fontSize={16}>How do you want to pay today?</Heading> */}

      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
        w={"40%"}
      >
        <Center marginBottom={5}>
          <Heading fontSize={20}>Billing Address</Heading>
        </Center>
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
          </HStack>
          <FormControl  isRequired>
            <FormLabel>Address</FormLabel>
            <Input type="text" />
          </FormControl>
          <HStack>
            <Box>
              <FormControl isRequired>
                <FormLabel>City</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>State</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel>ZIP</FormLabel>
                <Input type="number" />
              </FormControl>
            </Box>
          </HStack>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={PlaceOrder}
            >
              ORDER
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
