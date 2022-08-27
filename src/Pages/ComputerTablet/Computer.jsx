import { Box, Flex, Heading, Select, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FilterCom } from "../components/FilterCom";
import { nanoid } from "nanoid";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";
import { fetchLaptopData } from "../../Redux/products/action";
import axios  from "axios";
import styles from "../../Style/card.module.css"

export const Computer = () => {
  const [phone , setPhone] = useState(null)

  useEffect(() => {
    getPhone()
}, [])
const getPhone = () => {
        axios.get('https://bestbuy-server.herokuapp.com/api/laptop').then(response => response.data).then(
            (result) => {
                setPhone(result)
            },
            (error) => {
                setPhone(null);
            }
          )
}
if (!phone) return (<div>No Record Found</div>)
  // const laptop = useSelector((store) => store.ecommerceData.laptop);
  // const dispatch = useDispatch();
  // const [searchParams] = useSearchParams();
  // useEffect(() => {
  //   if (laptop?.length === 0) {
  //     let params = {
  //       category: searchParams.getAll("category"),
  //     };
  //     dispatch(fetchLaptopData(params));
  //   }
  // }, [dispatch, laptop?.length, searchParams]);
  // console.log(laptop);
  return (
    <>
      {/* <Stack
        p={2}
        display={{ md: "flex" }}
        gap="20px"
        flexDirection={{ md: "row"}}
      >
        <Box flex={2}>
          <Box p={3} border={"1px solid"} borderColor="rgb(196,196,196)">
            <FilterCom />
          </Box>
        </Box>

        <Box flex={8}>
          <Box h={35} marginBottom={10} display={'flex'} gap='10px' alignItems={'center'} justifyContent={'end'}>
            <Text >Sort By : </Text>
            <Select w={'20%'}  placeholder="Select option">
              <option value="">Best Selling</option>
              <option value="l2h">Price: Low to High</option>
              <option value="h2l">Price: High to Low</option>
              <option value="">Costomer Ratings</option>
              <option value="">New Arrival</option>
            </Select>
          </Box>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {laptop.map((product) => {
              return <Card key={nanoid()} product={product} />;
            })}
          </Flex>
        </Box>
      </Stack> */}

<Stack
        p={2}
        display={{ md: "flex" }}
        gap="20px"
        flexDirection={{ md: "row" }}
      >
        <Box flex={2}>
          <Box p={3} border={"1px solid"} borderColor="rgb(196,196,196)">
            <FilterCom />
          </Box>
        </Box>

        <Box flex={8}>
          <Box h={35} marginBottom={10} display={'flex'} gap='10px' alignItems={'center'} justifyContent={'end'}>
            <Text >Sort By : </Text>
            <Select w={'20%'}  placeholder="Select option">
              <option value="">Best Selling</option>
              <option value="l2h">Price: Low to High</option>
              <option value="h2l">Price: High to Low</option>
              <option value="">Costomer Ratings</option>
              <option value="">New Arrival</option>
            </Select>
          </Box>
             <Box>
             <Box className={styles.phone}>
              <Flex flexWrap="wrap" justifyContent="space-around">
           
          {phone.map((phone,el)=>{
            return(
              
             <Flex>
              
            <Card className ="class1"
             id = {phone.id}
            
             image = {phone.image}
             
              desc = {phone.desc}
              model = {phone.model}
              rate={phone.rate}
             count ={phone.count}
            
          
              pickup={phone.pickup}
             
              shipping={phone.shipping}
            price ={phone.price}
              saving={phone.saving}
            print ={phone.print}
            offer ={phone.offer}


            />
               
             </Flex>
            
            )
          })}
           
          </Flex>
          </Box>
          </Box>
        </Box>
      </Stack>
   
    </>
  );
}
