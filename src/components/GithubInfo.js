import React from 'react';

import {
  Center,
  Button,
  Collapse,
  Box,
  useDisclosure,
  Text,
} from '@chakra-ui/react';

const GithubInfo = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const index = props.index;
  const user = props.users;

  return (
    <>
      <Center>
        <Button
          w='100%'
          key={user}
          marginBottom={15}
          onClick={onToggle}
          m='5'
          colorScheme={'blue'}
        >
         Github Stats
        </Button>
      </Center>
      <Collapse key={user} in={isOpen}>
        <Box width='100%'>
          <Text fontWeight='semibold'>Public Repos: {user.repos}</Text>
          <Text fontWeight='semibold'>Followers: {user.followers}</Text>
        </Box>
      </Collapse>
    </>
  );
};

export default GithubInfo;
