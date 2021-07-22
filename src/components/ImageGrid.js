import React from 'react';
import useFirestore from '../utils/useFirestore';
import { Wrap, WrapItem, Image } from '@chakra-ui/react';

const ImageGrid = () => {
  const { docs } = useFirestore('images');

  return (
    <Wrap cursor="pointer" spacing="30px" justify="center" maxW={1000} m="0 auto">
      { docs && docs.map(doc => (
        <WrapItem key={doc.id} shadow="lg">
          <Image w="250px" h="350px" objectFit="cover" bg="gray.500" src={doc.url} />
        </WrapItem>
      )) }
    </Wrap>
  );
}

export default ImageGrid;