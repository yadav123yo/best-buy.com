import { Box, Text, Checkbox, CheckboxGroup, VStack, Divider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";


export const FilterCom = () => {
  return (
    <div>
        <Box>
        <Box display={{ base: "none", md: "block" }} p="1rem 2rem">
          
          <Text fontSize={30} fontWeight={500}>Brand</Text>
          <CheckboxGroup
            colorScheme="green"
            // defaultValue={[CategoryValues]}
            // onChange={categoryHandler}
          >
            <VStack alignItems={"baseline"}>
              <Checkbox value="Samsung">Samsung</Checkbox>
              <Checkbox value="Apple">Apple</Checkbox>
              <Checkbox value="Motorola">Motorola</Checkbox>
              <Checkbox value="Google">Google</Checkbox>
              <Checkbox value="Nokia">Nokia</Checkbox>
            </VStack>
          </CheckboxGroup>
        </Box>
        <Divider border={2}/>
        <Box display={{ base: "none", md: "block" }} p="1rem 2rem">
          
          <Text fontSize={30} fontWeight={500}>Color</Text>
          <CheckboxGroup
            colorScheme="green"
            // defaultValue={[CategoryValues]}
            // onChange={categoryHandler}
          >
            <VStack alignItems={"baseline"}>
              <Checkbox value="Green">Green</Checkbox>
              <Checkbox value="Black">Black</Checkbox>
              <Checkbox value="Silver">Silver</Checkbox>
              <Checkbox value="Grey">Grey</Checkbox>
              <Checkbox value="Golden">Golden</Checkbox>
            </VStack>
          </CheckboxGroup>
        </Box>
        <Divider border={2}/>
        <Box display={{ base: "none", md: "block" }} p="1rem 2rem">
          
          <Text fontSize={30} fontWeight={500}>Costomer Rating</Text>
          <CheckboxGroup
            colorScheme="green"
            // defaultValue={[CategoryValues]}
            // onChange={categoryHandler}
          >
            <VStack alignItems={"baseline"}>
              <Checkbox value="Green">Top-Rated</Checkbox>
              <Checkbox value="5"> 5-star</Checkbox>
              <Checkbox value="4">4 & Up</Checkbox>
              <Checkbox value="3">3 & Up</Checkbox>
              <Checkbox value="2">2 & Up</Checkbox>
              <Checkbox value="1">1 & Up</Checkbox>
            </VStack>
          </CheckboxGroup>
        </Box>
        </Box>
    </div>
  )
}
