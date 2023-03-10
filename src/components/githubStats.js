import React from 'react';

import {
  Center,
  Button,
  Collapse,
  Box,
  Image,
  useDisclosure,
  isOpen,
  onToggle,
  VStack,
} from '@chakra-ui/react';

const GithubStats = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const index = props.index;
  const userLogin = props.users;

  return (
    <>
      <VStack>
        <Center>
          <Button
            w='100%'
            key={userLogin}
            marginBottom={15}
            onClick={onToggle}
            m='5'
            colorScheme={'blue'}
          >
            GitHub Contributions
          </Button>
        </Center>
        <Collapse key={userLogin} in={isOpen}>
          <Box width='100%'>
            <Image
              // boxSize='400px'
              w={'100%'}
              src={`https://ghchart.rshah.org/HEXCOLORCODE/${userLogin}`}
              alt='Name Your Github chart'
            />
          </Box>
        </Collapse>
      </VStack>
    </>
  );
};

export default GithubStats;
