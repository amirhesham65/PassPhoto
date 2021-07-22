import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
} from '@chakra-ui/react';

import { useAuth } from '../../utils/useAuth';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';


const SignIn = () => {
  const history = useHistory();
  const { register, handleSubmit, formState } = useForm();
  const { user, signIn } = useAuth();

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  const onSubmit = async data => {
    try {
      await signIn(data.email, data.password);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <Flex justifyContent='flex-end' alignItems='center'>
          <Text fontSize='xs' mr={3}>New to PassPhoto?</Text>
          <Link to='/signup'>
            <Button justifySelf='flex-start' display='inline'>Create Account</Button>
          </Link>
          <ColorModeSwitcher />
        </Flex>
        <VStack spacing={8}>
          <Box maxW='lg' minW='sm'>
            <Heading as='h1' size='lg' mb={5}>Sign In</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id='email' mb={3}>
                <FormLabel>Email address</FormLabel>
                <Input name='email' type='email' {...register('email')} />
              </FormControl>
              <FormControl id='password' mb={7}>
                <FormLabel>Password</FormLabel>
                <Input name='password' type='password' {...register('password')} />
                <FormHelperText textAlign='right'>Forgot Password?</FormHelperText>
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
                Sign In
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

export default SignIn;