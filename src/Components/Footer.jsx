import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

import {
    FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaPrint,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >

      <Container as={Stack} p='4%' maxW={"10xl"} py={10} borderTop={'1px solid'}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "4fr 2fr" }}
          spacing={8}
        >
          <Box>
            <SimpleGrid
              marginBottom={"30px"}
              templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
              spacing={8}
            >
              <Stack align={"flex-start"}>
                <ListHeader>Order & Purchases</ListHeader>
                <Link href={"#"}>Check Order Status</Link>
                <Link href={"#"}>Shipping, Delivery & Pickup</Link>
                <Link href={"#"}>Returns & Exchanges</Link>
                <Link href={"#"}>Price Match Guarantee</Link>
                <Link href={"#"}>Product Recalls</Link>
                <Link href={"#"}>Trade-In Program</Link>
                <Link href={"#"}>Gift Cards</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Support & Services</ListHeader>
                <Link href={"#"}>Visit our Support Center</Link>
                <Link href={"#"}>Shop with an Expert</Link>
                <Link href={"#"}>Schedule a Service</Link>
                <Link href={"#"}>Manage an Appointment</Link>
                <Link href={"#"}>Protection & Support Plans</Link>
                <Link href={"#"}>Haul Away & Recycling</Link>
                <Link href={"#"}>Contact Us</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Partnerships</ListHeader>
                <Link href={"#"}>Affiliate Program</Link>
                <Link href={"#"}>Advertise with Us</Link>
                <Link href={"#"}>Developers</Link>
                <Link href={"#"}>Best Buy Health</Link>
                <Link href={"#"}>Best Buy Education</Link>
              </Stack>
            </SimpleGrid>
            <SimpleGrid
              marginBottom={"30px"}
              templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
              spacing={8}
            >
              <Stack align={"flex-start"}>
                <ListHeader>Payment Options</ListHeader>
                <Link href={"#"}>My Best Buy* Credit Card</Link>
                <Link href={"#"}>Pay Your Bill at Citibank</Link>
                <Link href={"#"}>Lease to Own</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Rewards & Membership</ListHeader>
                <Link href={"#"}>Best Buy Totaltech</Link>
                <Link href={"#"}>My Best Buy</Link>
                <Link href={"#"}>View Points & Certificates</Link>
                <Link href={"#"}>Member Offers</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>About Best Buy</ListHeader>
                <Link href={"#"}>Corporate Information</Link>
                <Link href={"#"}>Careers</Link>
                <Link href={"#"}>
                  Corporate Responsibility & Sustainability
                </Link>
                <Link href={"#"}>Discover & Learn</Link>
              </Stack>
            </SimpleGrid>
          </Box>
          <Stack
            align={"flex-start"}
            p="2%"
            bg={useColorModeValue("white.500", "white.300")}
          >
            <Flex
              p="3%"
              h={"70%"}
              direction={"column"}
              justifyContent="space-around"
              bg={useColorModeValue("white", "white")}
              border="1px solid rgb(196,196,196)"
            >
              <Stack  direction={"column"}>
                <ListHeader>Get the latest deals and more.</ListHeader>
                <Box>
                  <Input
                    placeholder={"Your email address"}
                    bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                    border={0}
                    _focus={{
                      bg: "whiteAlpha.300",
                    }}
                  />
                </Box>
                <Box>
                  <Input
                    type="submit"
                    bg={useColorModeValue("blue", "blue")}
                    color="white"
                    border={0}
                    _focus={{
                      bg: "blue.300",
                    }}
                  />
                </Box>
              </Stack>
              <Stack spacing={6}>
                <Flex>
                  <Box fontSize={"55px"} marginRight="20px" color={"blue"}>
                    {/* <Logo  /> */}
                    <FaPrint />
                  </Box>
                  <Text fontSize={"xl"} fontWeight="500">
                    Best Buy app <br />
                   <Link to='#'> Learn more <FaArrowRight/></Link>
                  </Text>
                </Flex>
                <Stack direction={"row"} spacing={6}>
                  <SocialButton label={"Facebook"} href={"https://www.facebook.com/bestbuy"}>
                    <FaFacebookF />
                  </SocialButton>
                  <SocialButton label={"Twitter"} href={"https://twitter.com/BestBuy"}>
                    <FaTwitter />
                  </SocialButton>
                  <SocialButton label={"Instagram"} href={"https://www.instagram.com/bestbuy/"}>
                    <FaInstagram />
                  </SocialButton>
                  <SocialButton label={"Printerest"} href={"https://in.pinterest.com/bestbuy/"}>
                    <FaPinterestP />
                  </SocialButton>
                  <SocialButton label={"YouTube"} href={"https://www.youtube.com/user/bestbuy"}>
                    <FaYoutube />
                  </SocialButton>
                </Stack>
              </Stack>
            </Flex>
          </Stack>
        </SimpleGrid>
        <Text>
          How was your experience?{" "}
          <Link to="#">Give feedback about our website</Link>
        </Text>
      </Container>

      <Box
      borderTop={'1px solid'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      p={'1%'}>
      <Container
        as={Stack}
        maxW={'10xl'}
        py={4}
        p='1%'
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'space-around', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Accessibility</Link>
          <Link href={'#'}>Terms & Conditions</Link>
          <Link href={'#'}>Privacy</Link>
          <Link href={'#'}>Interest-Based Ads</Link>
          <Link href={'#'}>California Privacy Rights</Link>
          <Link href={'#'}>Do Not Sell My Personal Information</Link>
          <Link href={'#'}>California Supply Chain Transparancy Act </Link>
        </Stack>
       
      </Container>
      <Text>In-store pricing may vary. Prices and offers are subject to change. © 2022 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the tag design, and MY BEST BUY are trademarks of Best Buy and its affiliated companies.</Text>
    </Box>
    </Box>
  );
};
