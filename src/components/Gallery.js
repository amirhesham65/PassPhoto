import React from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { GoPlus } from 'react-icons/go';
import Navbar from './Navbar';

const Gallery = () => {

  return (
    <Box p={6}>
      <Navbar />
      <VStack sp>
        <Text fontSize="4xl" textAlign="center">Gallery</Text>
        <Text fontSize="sm" color="gray.500" maxW={300} textAlign="center">You can add one or more images by clicking the button below.</Text>
        <Box></Box>
        <Button p={5} size="sm" leftIcon={<GoPlus />}>Add Images</Button>
      </VStack>
    </Box>
  );
};

export default Gallery;