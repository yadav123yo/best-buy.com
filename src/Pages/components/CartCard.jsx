import { Button, Heading, Image, Select, Text ,Flex,Stack, Center} from "@chakra-ui/react";
import React from "react";
import {Phone} from "../CellPhone/Cellphone"
import styles from "../../Style/card.module.css"

export const CartCard = ({ id,image,desc,pickup,shipping,price,saving,print,deleteCart }) => {
  
  return (
    <Center border={'1px solid'} borderColor={'gray.300'} bg={'white'}>
      <Flex w={'80%'} h={'250px'} justify={'space-evenly'} gap='20px' p={4} >
        <Stack flex={2}>
          <Image maxW={'100px'} maxH={'150px'} src={image} />
        </Stack>
        <Stack flex={1}>
          <Text className={styles.classCart} >{desc}</Text>
        </Stack>
        <Flex  direction={'column'}>
            <Text><span fontWeight={'500'}>PickUp:</span>{pickup}</Text>
            <Text><span fontWeight={'500'}>Shipping:</span>{shipping}</Text>
        </Flex>
        <Stack flex={1}>
          <Select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </Select>
          <Button>Remove</Button>
        </Stack>
        <Stack>
          <Heading fontSize={13}>${price}</Heading>
          <Button bg={"maroon"}>Save ${saving}</Button>
          <Text>Was ${print}</Text>
        </Stack>
      </Flex>
    </Center>
  );
};
