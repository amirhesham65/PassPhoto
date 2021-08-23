import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsArrowRightShort as ArrowIcon } from 'react-icons/bs';

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
  Stack,
  Center
} from '@chakra-ui/react';
import ReactCodeInput from 'react-code-input';
import { firebaseFirestore } from '../../config/firebase';
import { useAuth } from '../../utils/useAuth';

const PickPasscode = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [currentPasscode, setCurrentPasscode] = useState(user.passcode)

  const handleSubmit = async () => {
    const userRef = firebaseFirestore.collection('users').doc(user.uid);
    await userRef.update({"passcode": currentPasscode});
    history.push('/');
  }


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
            <ReactCodeInput onChange={(value) => setCurrentPasscode(value)} type='number' fields={4} />
            <br />
            <Box py={3}></Box>
            <Center>
            <Stack direction="row" spacing={3} >
              <Button rightIcon={<ArrowIcon size={23} />} onClick={handleSubmit}>Confirm</Button>
              <Button variant="link" onClick={() => history.push('/')}>
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