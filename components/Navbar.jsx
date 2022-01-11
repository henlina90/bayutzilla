import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Text } from '@chakra-ui/react';
import { FcMenu, FcKey, FcSearch, FcLock, FcHome, ArrowLeftIcon,FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2'>
    <Box fontWeight="bold" fontSize="2xl" padding-left='2'>
      <Link href='/'>Bayutzilla</Link>
    </Box>

    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} color='#000' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<FcSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcLock />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FcKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;