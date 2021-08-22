import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button, Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

import { useAuth } from '../../utils/useAuth';

const SignUp = () => {
  const history = useHistory();
  const { register, handleSubmit, formState } = useForm();
  const { user, createUserWithEmailAndPassword } = useAuth();

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  const onSubmit = async data => {
    if (data.password === data.confirmPassword) {
      await createUserWithEmailAndPassword(data.name, data.email, data.password);
      history.push('/');
    } else {
      console.error('No Match!');
    }
  };

  return (
    <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <Flex justifyContent='flex-end' alignItems='center' mx={5}>
          <Text fontSize='xs' mr={3}>Have an Account?</Text>
          <Link to='/signin'>
            <Button justifySelf='flex-start' display='inline'>Sign In</Button>
          </Link>
        </Flex>
        <VStack spacing={8}>
          <Box maxW='lg' minW='sm'>
            <Heading as='h1' size='lg' mb={5}>Sign Up</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id='name' mb={3}>
                <FormLabel>Name</FormLabel>
                <Input type='text' {...register('name')} />
              </FormControl>
              <FormControl id='email' mb={3}>
                <FormLabel>Email address</FormLabel>
                <Input type='email' {...register('email')} />
              </FormControl>
              <FormControl id='password' mb={7}>
                <FormLabel>Password</FormLabel>
                <Input type='password' {...register('password')} />
              </FormControl>
              <FormControl id='confirmPassword' mb={7}>
                <FormLabel>Confirm Password</FormLabel>
                <Input type='password' {...register('confirmPassword')} />
              </FormControl>
              <Button
                size='md'
                mb={3}
                width='xs'
                isLoading={formState.isSubmitting}
                loadingText='Signing In'
                colorScheme='teal'
                variant='outline'
                type='submit'
              >
                Create Account
              </Button>
            </form>
            <Text color='gray.500' fontSize='xs'>
              By continuing, you are agreeing to PassPhoto terms and conditions.
            </Text>
          </Box>
        </VStack>
      </Grid>
    </Box>
  );
};

export default SignUp;