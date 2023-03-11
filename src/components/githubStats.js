import React from 'react';

import {
  Center,
  Button,
  Collapse,
  Box,
  Image,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

const GithubStats = (props) => {
  const { isOpen, onToggle } = useDisclosure();
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
              w={'100%'}
              src={`https://ghchart.rshah.org/26A641/${userLogin}`}
              alt='Name Your Github chart'
            />
          </Box>
        </Collapse>
      </VStack>
    </>
  );
};

export default GithubStats;
