import React, { useEffect } from 'react';
import useStorage from '../utils/useStorage';
import { Progress } from '@chakra-ui/react';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])

  return (
    <Progress size="xs" value={progress} />
  );
}

export default ProgressBar;