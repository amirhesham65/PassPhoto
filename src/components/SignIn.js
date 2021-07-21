import React from 'react';
import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react';

const SignIn = () => {
  return (
    <VStack spacing={8}>
      <Box maxW="lg" minW='sm'>
        <Heading as="h1" size="lg" mb={5}>Sign In</Heading>
        <form>
          <FormControl id="email" mb={3}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" mb={7}>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
            <FormHelperText textAlign="right">Forgot Password?</FormHelperText>
          </FormControl>
          <Button
            size="md"
            mb={3}
            width="xs"
            isLoading
            loadingText="Signing In"
            colorScheme="teal"
            variant="outline"
          >
            SignIn
          </Button>
        </form>
        <Text color="gray.500" fontSize="xs">
          By continuing, you are agreeing to PassPhoto terms and conditions.
        </Text>
      </Box>

    </VStack>
  );
}

export default SignIn;