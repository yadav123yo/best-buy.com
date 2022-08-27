import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {nanoid} from 'nanoid';
import styles from "../Style/card.module.css"


var tppicks = [
  {
    id: 1,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215932_sd.jpg;maxHeight=214;maxWidth=278",
    url: "Apple Watch Series 7(GPS) 41mm Midnight...",
  },
  {
    id: 2,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487447_sd.jpg;maxHeight=214;maxWidth=278",
    url: "Apple-iPhone 13 Pro Max 5G 128GB-Alpine Gree...",
  },
  {
    id: 3,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4901/4901809_sd.jpg;maxHeight=214;maxWidth=278",
    url: "Apple-10.2-Inch iPad (Latest Model) with Wi-Fi...",
  },
  {
    id: 4,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=214;maxWidth=278",
    url: "Steel|Series-Apex Pro TKL Wired Mechanical...",
  },
];
export const Home = () => {
  return (
    <>
    <Box className={styles.home}>
      <Flex h={"600px"} gap="20px">
        <Stack
          flex={2}
          justifyContent="center"
          alignItems={"center"}
          backgroundImage={`url("https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-510776_2022TopDeals-GHPApp-LV-55adde1f-dd0b-48d7-9a08-b28bbc00187d.jpg")`}
        >
          <Button h={10} w={20} bg={'white'} color={"blue"}>
            Shop Now
          </Button>
        </Stack>
        <Flex direction={"column"} flex={3} gap='5px'>
          <Flex flex={2} p={2} border={"1px solid"} borderColor={"gray.300"}>
            {tppicks.map((val) => {
              return (
                <div
                  style={{
                    gap: "20px",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Crd key={nanoid()} image={val.image} url={val.url} />
                </div>
              );
            })}
          </Flex>
          <Flex justify={"space-around"} flex={3}>
            <Box
              border={"1px solid"}
              borderColor={'gray.300'}
              h={"70%"}
              display="flex"
              flexDirection={"column"}
              justifyContent="space-around"
              p={2}
            >
              <Button w={40} bg={"blue"} color="white">
                <span>Outlet</span> <span>Deals</span>
              </Button>
              <Image
                h={"60%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/ClearanceOpenBox_White-217158.png;maxHeight=230;maxWidth=330"
              />
              <Link to="#">View outlet deals</Link>
            </Box>
            <Box
              border={"1px solid"}
              borderColor={'gray.300'}
              h={"70%"}
              display="flex"
              flexDirection={"column"}
              justifyContent="space-around"
            >
              <Heading fontSize={16}>Continue</Heading>
              <Image
                h={"50%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500470_sd.jpg;maxHeight=428;maxWidth=644"
              />
              <Link to="#">TCL - 43" Class 4-Series 4k UHD HD</Link>
              <Link to="#">Go to Cart</Link>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Stack bg={"white"} marginTop={"30px"} p={4}>
        <Heading
        fontSize={25}
          borderBottom={"1px solid"}
          borderColor={"gray.200"}
          textDecoration={"underline"}
        >
          You viewed
        </Heading>
        <Text color="blue" cursor={'pointer'}>Manage all your recently viewed items</Text>
        <Flex height={300} gap="20px" p={4} justify={"space-around"}>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483692_sd.jpg;maxHeight=400;maxWidth=400"
            />
            <Text>Google - Pixel 6 Pro 128GB - Stormy Black </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458645_sd.jpg;maxHeight=400;maxWidth=400"
            />
            <Text>Toshiba - 55" Class C350 Series LED 4K</Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500470_sd.jpg;maxHeight=400;maxWidth=400"
            />
            <Text>TCL - 43" Class 4-Series 4K UHD HDR Smart</Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=214;maxWidth=278"
            />
            <Text>Apple - AirPods Pro </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=214;maxWidth=278"
            />
            <Text>MacBook Air 13.3" Laptop</Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            h={"full"}
            border={"1px solid"}
            borderColor="gray.200"
          >
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-93899-iphone13-pro-pol_der-f73f557f-62fd-4937-9f7d-1aba33288b71.jpg;maxHeight=504;maxWidth=740"
            />
            <Text>iPhone 13 Pro </Text>
          </Flex>
        </Flex>
      </Stack>

      <div
        style={{
          width:'90%',
          height: "105px",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          justifyContent: "space-around",
          fontWeight: "500",
          fontSize: "20px",
          margin: "20px auto",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "rgb(196,196,196)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
            }}
          >
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-confident-210831-c34d2a74-8b79-41cd-8161-b9987666f7d6.png;maxHeight=72;maxWidth=72"
                alt=""
              />
            </div>

            <div>
              {" "}
              <Heading fontSize={15}>Shop safely and confidently</Heading>
              <Text fontSize={12} color={"blue"}>
                See our safety procedure
              </Text>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "rgb(196,196,196)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
            }}
          >
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-expert-210831-70c599ed-fc34-47d8-9b93-85f899d93c8f.png;maxHeight=72;maxWidth=72"
                alt=""
              />
            </div>

            <div>
              {" "}
              <Heading fontSize={15}>Get help shopping from home.</Heading>
              <Text fontSize={12} color={"blue"}>
                Shop with an Expert
              </Text>
            </div>
          </div>
        </div>
      </div>


<Stack w={'100%'} h={'60px'} backgroundColor={'yellow'} >
      <div
        style={{
          width: "50%",
          margin:'auto',
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          
        }}
      >
        <Heading>Insignia air fryers product recall .</Heading>
        <Link to="#" color="blue">
          Learn more.
        </Link>
      </div>
      </Stack>


      <Flex p={2} h={500} bg={"gray.100"} justify={"space-around"}>
        <Stack
          p={10}
          h={"full"}
          w={"47%"}
          backgroundImage={`url('https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-MMT-555591-windows-fcc6f1ef-675e-463d-bee8-64bd19088fbb.jpg')`}
        >
          <Heading>Save up to $500</Heading>
          <Text>on select Windows laptops.</Text>
          <Text>Minimum savings is $30</Text>
          <Button w={40} bg={"blue"} color="white">
            Shop Now
          </Button>
        </Stack>
        <Stack
          p={10}
          h={"full"}
          w="47%"
          backgroundImage={`url('https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-MMT-555591-tv-4ef8f148-989d-4846-ae5c-65854b349e5b.jpg')`}
        >
          <Heading>Smart TVs</Heading>
          <Text>as low as $109.99</Text>
          <Button w={40} bg={"blue"} color={"white"}>
            Shop Now
          </Button>
        </Stack>
      </Flex>



      <Stack border={"1px solid"} borderColor={"gray.200"}>
        <Flex direction={"row"} justify={"space-around"}>
          <Flex>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-37875-app-curbside-vpe_der-149659.png;maxHeight=144;maxWidth=144" />
            <Box>
              <Heading>Ready in one hour</Heading>
              <Text>with Store or Curbside Pickup.</Text>
            </Box>
          </Flex>
          <Flex>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=144;maxWidth=144" />
            <Box>
              <Heading>Free Next-Day Delivery</Heading>
              <Text>on thousands of items.</Text>
            </Box>
          </Flex>
          <Flex>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=144;maxWidth=144" />
            <Box>
              <Heading>Ready in one hour</Heading>
              <Text>Order by 3 p.m., get it by 8 p.m.</Text>
              <Text>Order by 2 p.m. Sunday.</Text>
            </Box>
          </Flex>
        </Flex>
      </Stack>




      <Flex
        h={"170px"}
        w={'100%'}
        backgroundImage={`url("https://pisces.bbystatic.com/image2/BestBuy_US/dam/gl62892-tt-skinny-bg-lg-4ed9a87a-ca73-4e7a-8610-0f2159f2239b.jpg")`}
      >
        <Flex padding={10} direction={"column"}>
          <Image
            w={"80px"}
            h="50px"
            src="https://tse2.mm.bing.net/th?id=OIP.L3mUmJfZ497TODJtlpGTUgHaGy&pid=Api&P=0&w=176&h=161"
          />
          <Heading color={"white"}>totaltech</Heading>
          <Box w={150} color="blue" bg={"white"} textAlign="center">
            Learn More
          </Box>
        </Flex>
        <Box border={"1px solid"} borderColor="white"></Box>
        <Flex padding={10} direction={"column"} color="white" w="50%">
          <Heading>The membership you and your tech deserve.</Heading>
          <Text>
            Best Buy Totaltech™ provides 24/7/365 tech support, up to 24 months
            of product protection with active membership, free standard
            installation and so much more. Terms and conditions apply.
          </Text>
        </Flex>
      </Flex>




      <Stack h={600} p={6}>
        {/* 1st parent div */}
        <div
          style={{
            display: "grid",
            gap: "30px",
            gridTemplateColumns: "repeat(3,1fr)",
            height: "500px",
            width: "100%",
            color: "blue",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              gap: "10px",
              backgroundColor: "#EFF1F1 ",
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              padding: "2%",
            }}
          >
            {/* 1st */}
            <div
              style={{
                height: "250px",
                width: "100%",
                backgroundColor: "none",
              }}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-fg-220509-6016e3c8-f983-4ac2-8dc9-b241bf9812da.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For Chill dads</h3>
            </div>
            {/* 2nd */}
            <div
              style={{
                height: "250px",
                width: "100%",
                backgroundColor: "none",
              }}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-outdoors-220509-510c4e8d-b671-4e4c-b1ec-8fd8c41bcd13.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For outdoorsy dads</h3>
            </div>
            {/* 3rd */}
            <div
              style={{
                height: "250px",
                width: "100%",
                backgroundColor: "none",
              }}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-fitness-220509-9d40595e-4ce1-4d7d-8eb4-9d0c9c26e64f.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For exercise-loving dads</h3>
            </div>
            {/* 4rth */}
            <div
              style={{
                height: "250px",
                width: "100%",
                backgroundColor: "none",
              }}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-chef-220509-ea150d50-2edd-4735-ae5c-a6523eea7f37.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For chef dads</h3>
            </div>
          </div>

          {/* 2nd parent div */}
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#EFF1F1 ",
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              padding: "2%",
              gap: "10px",
            }}
          >
            {/* 1st */}
            <div
              style={{
                height: "250px",
                width: "100%",
              }}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-little-220516-9c86109f-7477-4382-9033-bb1a7d45a00f.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For little grads</h3>
            </div>
            {/* 2nd */}
            <div
              style={{
                height: "250px",
                width: "100%",
              }}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-middle-220516-5cb33289-f4ed-4e09-ac3e-2ba0e695496b.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For middle school grades</h3>
            </div>
            {/* 3rd */}
            <div
              style={{
                height: "250px",
                width: "100%",
              }}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-high-220516-30b898c1-65bb-4bcc-8c86-86f1bafda292.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For high school grads</h3>
            </div>
            {/* 4rth */}
            <div
              style={{
                height: "250px",
                width: "100%",
              }}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-college-220516-7a6d93f6-df65-46e3-be9c-a114e1204842.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>For college grade</h3>
            </div>
          </div>

          {/* 3rf parent div */}
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#EFF1F1 ",
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap:'10px',
              padding:'2%'
            }}
          >
            {/* 3rd */}
            {/* 1st */}
            <div
              style={{
                height: "250px",
                width: "100%",
              }}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-74510-Explore-mentorship-220606-bec44b7f-cec2-4932-b5c0-0950e649fa6e.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>Teach access means brighter furtures</h3>
            </div>
            {/* 2nd */}
            <div
              style={{
                height: "250px",
                width: "100%",
                backgroundColor: "none",
              }}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-74510-Explore-more-love-220606-7dccad72-4487-4593-9c7c-56a5c2afa038.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>More celebration. More Love.</h3>
            </div>
            {/* 3rd */}
            <div
              style={{
                height: "250px",
                width: "100%",
                backgroundColor: "none",
              }}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73679-flex-circular-eco-220509-e952af56-a1b6-477d-8a25-2ed4159c74e0.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>Sustainability is a part og our ecosystem</h3>
            </div>
            {/* 4rth */}
            <div
              style={{
                height: "250px",
                width: "100%",
                backgroundColor: "none",
              }}
            >
              <img
                style={{ height: "80%", width: "100%" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73679-flex-tablet-ttc-220509-1f7bc22c-3346-4a3a-9ace-031b35eb2c8e.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <h3>Commited to making a difference</h3>
            </div>
          </div>
        </div>
      </Stack>

      <Stack p={2} marginBottom={30}>
        <Heading>Our featured offers</Heading>
        <Divider />
        <Flex direction={"column"}>
          <Flex h={600} border={"1px solid"} borderColor={"gray.200"}>
            <Flex
              p={2}
              borderRight={"1px solid"}
              borderColor={"gray.300"}
              h={"full"}
              justify={"space-around"}
              display="column"
            >
              <Image
                h={"70%"}
                w={"80%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-93899-iphone13-pro-pol_der-f73f557f-62fd-4937-9f7d-1aba33288b71.jpg;maxHeight=504;maxWidth=740"
              />
              <Box>
                <Heading color={'blue'}>
                  iPhone 13 Pro <br /> Save up to $800
                </Heading>
                <Text color={'gray.500'}>with qualified activation and trade-in of iPhone</Text>
              </Box>
            </Flex>
            <Flex
              p={2}
              borderRight={"1px solid"}
              borderColor={"gray.300"}
              h={"full"}
              justify={"space-around"}
              display="column"
            >
              <Image
                h={"70%"}
                w={"80%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-552481_der-992f5ee6-c7cc-4a54-879e-5fb01fae0462.jpg;maxHeight=504;maxWidth=740"
              />
              <Box>
                <Heading color={'blue'}>Gifts for gaming dads.</Heading>
                <Text color={'gray.500'}>
                  Find an assortment og games, from new hits to classic titles,
                  plus an array of accessories
                </Text>
              </Box>
            </Flex>
            <Flex
              p={2}
              borderRight={"1px solid"}
              borderColor={"gray.300"}
              h={"full"}
              justify={"space-around"}
              display="column"
            >
              <Image
                h={"70%"}
                w={"80%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_microsoft-happy-guy-v2-0620-3a7b8bc1-22dd-4fc9-8cf6-905382572981.jpg;maxHeight=504;maxWidth=740"
              />
              <Box>
                <Heading color={'blue'}>Introducing Surface Laptop Co 2.</Heading>
                <Text color={'gray.500'}>Sleek, light, on the go performance.</Text>
              </Box>
            </Flex>
          </Flex>
          <Flex h={600} border={"1px solid"} p={2} borderColor={"gray.300"}>
            <Flex
              p={2}
              borderRight={"1px solid"}
              borderColor={"gray.300"}
              h={"full"}
              justify={"space-around"}
              display="column"
            >
              <Image
                h={"70%"}
                w={"80%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/mmt-557424-apple-tv-pol_der-81ccc21e-4d16-428e-aaa0-93003a919044.jpg;maxHeight=504;maxWidth=740"
              />
              <Box>
                <Heading color={'blue'}>
                  Apple TV 4K (2nd gen) <br />
                  Save $50 on the 32GB or 64GB model.
                </Heading>
                <Text color={'gray.500'}>with qualified activation and trade-in of iPhone</Text>
              </Box>
            </Flex>
            <Flex
              p={2}
              borderRight={"1px solid"}
              borderColor={"gray.300"}
              h={"full"}
              justify={"space-around"}
              display="column"
            >
              <Image
                h={"70%"}
                w={"80%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-549477_pol_COPE_DER-bb7580c0-afa1-4b6b-9775-d78aa1be89e3.jpg;maxHeight=504;maxWidth=740"
              />
              <Box>
                <Heading color={'blue'}>Save up to $100 on select wearables.</Heading>
                <Text color={'gray.500'}>
                  Find an assortment og games, from new hits to classic titles,
                  plus an array of accessories
                </Text>
              </Box>
            </Flex>
            <Flex
              p={2}
              borderRight={"1px solid"}
              borderColor={"gray.300"}
              h={"full"}
              justify={"space-around"}
              display="column"
            >
              <Image
                h={"70%"}
                w={"80%"}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-552448-speakers-pol-der-f2233e68-2161-4487-b9c7-4e1c2cf72a25.jpg;maxHeight=504;maxWidth=740"
              />
              <Box>
                <Heading color={'blue'}>Save up to 25% on select on speakers.</Heading>
                <Text color={'gray.500'}>
                  Take your audio to the next level with theater speakers.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Stack>

      <Stack p={4}>
        <Heading fontSize={25}>Related to items you've viewed</Heading>
        <Divider />
        <Flex h={300} p={2}>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450783_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text>
              Best Buy essential, Tilting TV Wall Mount for Moat 47-84' TVa -
              Black
            </Text>
            <Text>$39.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483636_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text>Goggle - Pixel 6 Pro 128GB (unlocked)- Stormy Black</Text>
            <Text>$799.00</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451333_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text>
              Best Buy essential Full Motion TV Wall Mount for 47-84" TVa
            </Text>
            <Text>$59.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451090cv11d.jpg;maxHeight=272;maxWidth=400"
            />
            <Text>
              Best Buy essential, Fixed TV Wall Mount for Moat 47-84' TVa -
              Black
            </Text>
            <Text>$29.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483699_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text>Google - Pixel 6 128GB - Stormy Black</Text>
            <Text>$599.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452361cv11d.jpg;maxHeight=272;maxWidth=400"
            />
            <Text>
              Best Buy essential, Extended TV Wall Mount for Moat 32-70' TVa -
              Black
            </Text>
            <Text>$49.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501378_sd.jpg;maxHeight=640;maxWidth=550"
            />
            <Text>SamSung - Pixel 6 128GB - Stormy Black</Text>
            <Text>$619.99</Text>
          </Flex>
        </Flex>
      </Stack>

      <Stack p={4}>
        <Heading fontSize={25}>Trending deals</Heading>
        <Divider />
        <Flex h={300} p={2}>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215932_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text>Apple Watch Series 7(GPs) 41mm Midnight Aluminium Case </Text>
            <Text>$39.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text>Apple - AirPods Pro(with Magsafe Charging Case)</Text>
            <Text>$179.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494441_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text>
              Samsung - Galaxy S22 Ultra 256GB (Unlocked) - Phantom Black
            </Text>
            <Text>$999.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6474/6474501_rd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text>GoPro - HERO10 Black Action Camera</Text>
            <Text>$399.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401727_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text>
              Lenovo - Chromebook Duet -10.1* Touch Screen Tablet - 4GB
            </Text>
            <Text>$189.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6342/6342362_sd.jpg;maxHeight=272;maxWidth=400"
            />
            <Text>
              Apple TV 4K , 32GB (2nd Generation) (Latest Model) - Black
            </Text>
            <Text>$149.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501378_sd.jpg;maxHeight=640;maxWidth=550"
            />
            <Text>SamSung - Pixel 6 128GB - Stormy Black</Text>
            <Text>$619.99</Text>
          </Flex>
        </Flex>
      </Stack>

      <Flex
        margin={"40px"}
        justify={"space-around"}
        alignItems="center"
        gap="40px"
        h={300}
        w={"40%"}
      >
        <Flex
          h={350}
          direction={"column"}
          justify={"space-around"}
          border={"1px solid"}
          borderColor={"gray.300"}
          p={10}
        >
          <Image
            h={"50%"}
            w={"full"}
            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-37400-pol-dotd-190823_der-98962.png;maxHeight=280;maxWidth=412"
          />
          <Heading fontSize={16}>Deal of the Day.</Heading>
          <Text>Great deals. Every day.</Text>
        </Flex>
        <Flex
          h={350}
          direction={"column"}
          justify={"space-around"}
          w={350}
          border={"1px solid"}
          borderColor={"gray.300"}
          p={10}
        >
          <Image
            h={"70%"}
            w={"80%"}
            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-37504-pol-outlet-190823-98410.png;maxHeight=280;maxWidth=412"
          />
          <Heading color={"blue.600"} fontSize={16}>
            Clearence, open-box and more.
          </Heading>
          <Text fontSize={13}>
            Save when you shop the Best Buy Outlet for clearence, open-box,
            refurbished and pre-owned items.
          </Text>
        </Flex>
      </Flex>
             
             <Stack p={3} h={150}
             backgroundColor={'blue'}>
            <Flex w={'70%'} margin='auto' alignItems={'center'} justify={'space-around'} p={4}>
                <Image w={150} h={'full'} src='https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-66611-cb-fs-211018-6dd3346e-0ef8-458c-b16d-5ff2264fbb11.png'/>
            <Box>
                <Heading color='white'>Apply today and get</Heading>
                <Heading color={'yellow'}>10% back</Heading>
            </Box>
            <Text color={'white'}>in rewards on your first day of purchase when you are approved for the Card.</Text>
            <Button w={100} bg={'yellow'}>Learn More</Button>
            </Flex>
            </Stack>



      <Stack marginBottom='100px' marginTop={'30px'} p={4}>
        <Heading fontSize={22}>Featured Products</Heading>
        <Divider />
        <Flex h={300} p={2}>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398119_sd.jpg;maxHeight=150;maxWidth=225"
            />
            <Text color={'blue.500'}>Samsung - Galaxy 13.3" 4K Ultra HD Touch- Screen Chromebook - Intel Core i7 </Text>
            <Text>$539.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6484/6484736_sd.jpg;maxHeight=150;maxWidth=225"
            />
            <Text>Citizen - CZ Smart 44mm Black IP Stainlss Steel Case Hvbrid Heart Rate</Text>
            <Text>$279.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502273_sd.jpg;maxHeight=150;maxWidth=225"
            />
            <Text>
              ario - Essential Sportlight 4 Camerass and Yard Sign, Indoor/Outdoor 
            </Text>
            <Text>$349.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502943_sd.jpg;maxHeight=150;maxWidth=225"
            />
            <Text>HP - Victua 15.6" Gaming Laptop - Intel Core i7-1265DH- 16GB Memory</Text>
            <Text>$1399.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430060_sd.jpg;maxHeight=150;maxWidth=225"
            />
            <Text>
              Amazon - Echo dot (4th Gen) Smart speaker with Alexa - Charcol
            </Text>
            <Text>$27.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416337_sd.jpg;maxHeight=150;maxWidth=225"
            />
            <Text>
              Ario - Essential Spotlight Camera - indoor/Outdoor Wire-Free 1080 Security Camera
            </Text>
            <Text>$99.99</Text>
          </Flex>
          <Flex p={2} direction={"column"}>
            <Image
              h={"60%"}
              w={"70%"}
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501378_sd.jpg;maxHeight=640;maxWidth=550"
            />
            <Text>SamSung - Pixel 6 128GB - Stormy Black</Text>
            <Text>$619.99</Text>
          </Flex>
        </Flex>
      </Stack>
      </Box>
    </>
  );
};

const Crd = (props) => {
  return (
    <>
      <div>
        <img src={props.image} alt="Special Deals" />
      </div>
      <div>
        <span>{props.url}</span>
      </div>
    </>
  );
};
