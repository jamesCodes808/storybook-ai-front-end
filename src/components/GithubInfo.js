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
          <Text fontWeight='semibold'>Following: {user.following}</Text>
          {user.location !== null ? (
            <Text fontWeight='semibold'>Location: {user.location}</Text>
          ) : null}
        </Box>
      </Collapse>
    </>
  );
};

export default GithubInfo;
