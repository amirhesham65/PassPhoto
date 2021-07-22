import React, { useState, useRef } from 'react';
import {
  Box, Button, Text, VStack, Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react';
import { GoPlus } from 'react-icons/go';
import Navbar from '../Navbar';
import ProgressBar from '../ProgressBar';
import ImageGrid from '../ImageGrid';

const Gallery = () => {
  const [file, setFile] = useState(null);

  const [error, setError] = useState(null);
  const fileInputRef = useRef();

  const changeHandler = e => {
    let selected = e.target.files[0];
    const allowedTypes = ['image/png', 'image/jpeg'];
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  return (
    <Box p={6}>
      <Navbar />
      <VStack sp>
        <Text fontSize='4xl' textAlign='center'>Gallery</Text>
        <Text fontSize='sm' color='gray.500' maxW={300} textAlign='center'>You can add one or more images by clicking
          the button below.</Text>
        <Box></Box>
        <Button
          p={5}
          size='sm'
          leftIcon={<GoPlus />}
          onClick={() => fileInputRef.current.click()}
        >Add Images</Button>
        <input ref={fileInputRef} type='file' hidden onChange={changeHandler} />
        <br />
        {error && (
          <Alert status='error' variant='top-accent' maxWidth='lg'>
            <AlertIcon />
            <AlertTitle mr={2}>Couldn't upload image!</AlertTitle>
            <CloseButton onClick={() => setError(null)} position='absolute' right='8px' top='8px' />
          </Alert>
        )}

      </VStack>
      {file && (
        <ProgressBar file={file} setFile={setFile} />
      )}
      <br/> <br/>
      <ImageGrid />
    </Box>
  );
};

export default Gallery;