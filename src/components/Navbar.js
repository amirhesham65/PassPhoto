import React from 'react';
import {
  Text, Flex, Image, Button, HStack, Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import { useAuth } from '../utils/useAuth';
import { IoMdArrowDropdown as MenuIcon, IoMdExit as LogoutIcon, IoMdSettings as SettingsIcon } from 'react-icons/io';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { signOut } = useAuth();
  return (
    <Flex alignItems='center' justifyContent='space-between'>
      <Flex id='logo' alignItems='inherit'>
        <Image
          src={logo}
          boxSize='30px'
          objectFit='cover'
          alt='logo'
        />
        <Text fontSize='lg' fontWeight='400' px={2}><b>Pass</b>Photo</Text>
      </Flex>
      <HStack>
        <Menu>
          <MenuButton as={Button} leftIcon={<SettingsIcon />} rightIcon={<MenuIcon />}></MenuButton>
          <MenuList>
            <MenuItem><Link to='/pickpasscode'>Change Passcode</Link></MenuItem>
            <MenuItem onClick={signOut}>Logout &nbsp; <LogoutIcon /></MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Navbar;