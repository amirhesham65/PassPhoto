import React from 'react';
import { Text, Flex, Image, Button, HStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useAuth } from '../utils/useAuth';
import { GoSignOut } from 'react-icons/go';
import logo from '../images/logo.svg';

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
        <Button
          leftIcon={<GoSignOut />}
          onClick={signOut}
        >Logout</Button>
        <ColorModeSwitcher />
      </HStack>
    </Flex>
  );
};

export default Navbar;