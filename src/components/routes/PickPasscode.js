import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsArrowRightShort as ArrowIcon } from 'react-icons/bs';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
  VStack,
  HStack,
  Stack,
  Center
} from '@chakra-ui/react';

import { useAuth } from '../../utils/useAuth';
import ReactCodeInput from 'react-code-input';

const PickPasscode = () => {

  return (
    <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <Flex justifyContent='flex-end' alignItems='center' mx={5}></Flex>
        <VStack spacing={8}>
          <Box maxW='lg' minW='sm'>
            <Heading as='h1' size='lg'>Pick a passcode</Heading>
            <Text color='gray.500' fontSize='xs' mt={3} mb={5}>
              Enter a new and unique 4 digits passcode
            </Text>
            <ReactCodeInput type='number' fields={4} />
            <br />
            <Box py={3}></Box>
            <Center>
            <Stack direction="row" spacing={3} >
              <Button rightIcon={<ArrowIcon size={23} />}>Confirm</Button>
              <Button variant="link">
                <u>Skip</u>
              </Button>
            </Stack>
            </Center>
          </Box>
        </VStack>
      </Grid>
    </Box>
  );
};

export default PickPasscode;