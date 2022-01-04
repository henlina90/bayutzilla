import Link from "next/link";
// import Image from "next/image";
import { Flex, Box, Text, Button, Stack } from "@chakra-ui/react";
// import { Divider } from "@chakra-ui/react";

import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";
// import imageOne from "../assets/images/img-1.jpg";
// import imageTwo from "../assets/images/img-2.jpg";

export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex
    flexWrap="wrap"
    alignItems="center"
    justifyContent="center"
    p="10"
    backgroundColor="#f5f5f5;"
    textAlign="center"
  >
    {/* <Image src={imageUrl} width={500} height={300} alt="cover" /> */}
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        {/* <br />
        {title2} */}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        {/* <br />
        {desc2} */}
      </Text>
      <Button fontSize="xl" bg="green.500" color="white">
        <Link href={linkName}>
          <a>{buttonText}</a>
        </Link>
      </Button>
    </Box>
  </Flex>
);

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Box>
    <Banner
      purpose="FOR RENT"
      title1="Rental Properties"
      // title2="Everyone"
      desc1="Discover from apartments, builder floors, villas and more!"
      // desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      // imageUrl={imageOne}
    />
    <Flex flexWrap="wrap">
      {propertiesForRent.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
    <Banner
      purpose="FOR SALE"
      title1="Properties For Sale"
      // title2="Dream Home"
      desc1="Discover from apartments, land, builder floors, villas and more!"
      // desc2=" villas and more"
      buttonText="Explore Buying"
      linkName="/search?purpose=for-sale"
      // imageUrl={imageTwo}
    />
    <Flex flexWrap="wrap">
      {propertiesForSale.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
  </Box>
);

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
