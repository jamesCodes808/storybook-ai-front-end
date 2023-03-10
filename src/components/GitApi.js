import React from 'react';
import { Octokit } from '@octokit/rest';
import {
  Card,
  CardBody,
  Heading,
  Text,
  Stack,
  HStack,
  Center,
  Image,
  IconButton,
  Tooltip,
  VStack,
} from '@chakra-ui/react';

import { Link as ReactLink } from 'react-router-dom';

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GithubStats from './githubStats';
import GithubInfo from './GithubInfo';

// access token
const octokit = new Octokit({
  auth: process.env.REACT_APP_ACCESS_TOKEN,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
});

class GitApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    Promise.all([
      octokit.users.getByUsername({
        username: 'jamesCodes808',
      }),
      octokit.users.getByUsername({
        username: 'Sheldon-Pierce',
      }),
      octokit.users.getByUsername({
        username: 'ekalbers',
      }),
      octokit.users.getByUsername({
        username: 'reedoooo',
      }),
    ])
      .then((responses) => responses.map((response) => response.data))
      .then((data) => {
        console.log(data);
        this.setState({
          users: data.map((user) => ({
            name: user.name,
            location: user.location,
            bio: user.bio,
            repos: user.public_repos,
            followers: user.followers,
            following: user.following,
            login: user.login,
            avatar: user.avatar_url,
            linkedIn: [
              'https://www.linkedin.com/in/james-ian-ragasa-solima/',
              'https://www.linkedin.com/in/sheldon-pierce/',
              'https://www.linkedin.com/in/ethanalbers/',
              'https://www.linkedin.com/in/reed-vogt-student/',
            ],
            twitter: ['https://twitter.com/jamesCodes808', null, null, null],
          })),
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      // <div>
      <>
        {this.state.users.map((user, index) => (
          //     <div key={index}>
          //       <h1>{user.name}</h1>
          //       <p>Location: {user.location}</p>
          //       <p>Bio: {user.bio}</p>
          //       <p>Followers: {user.followers}</p>
          //     </div>
          //   ))}
          // </div>
          <Center key={index}>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              width={'cover'}
              margin='10'
              p={5}
              paddingLeft={8}
            >
              {/* <GitApi /> */}
              <Image
                objectFit='cover'
                borderRadius={'full'}
                maxW={{ base: '60%', sm: '200px' }}
                src={user.avatar}
                alt='Sheldon Picture'
              />
              <Stack>
                <CardBody>
                  <Center>
                    <Heading size='lg'>{user.name}</Heading>
                  </Center>
                  <Center>
                    <Text py='2' fontSize={'20'}>
                      <span fontSize='40'>"</span>
                      {user.bio}
                    </Text>
                  </Center>
                  <Center>
                    <HStack margin={'5'}>
                      <HStack>
                        {user.twitter[index] === null ? null : (
                          <Tooltip label='Twitter'>
                            <IconButton
                              as={ReactLink}
                              to={`${user.twitter[index]}`}
                              colorScheme='blue'
                              aria-label='Search database'
                              icon={<FaTwitter />}
                              target={'_blank'}
                              rel='noreferrer'
                            />
                          </Tooltip>
                        )}
                        <Tooltip label='LinkedIn'>
                          <IconButton
                            as={ReactLink}
                            to={`${user.linkedIn[index]}`}
                            colorScheme='blue'
                            aria-label='Search database'
                            icon={<FaLinkedin />}
                            target={'_blank'}
                            rel='noreferrer'
                          />
                        </Tooltip>

                        <Tooltip label='Github'>
                          <IconButton
                            as={ReactLink}
                            to={`https://github.com/${user.login}`}
                            colorScheme='blue'
                            aria-label='Search database'
                            icon={<FaGithub />}
                            target={'_blank'}
                            rel='noreferrer'
                          />
                        </Tooltip>
                      </HStack>
                    </HStack>
                  </Center>
                  <Center>
                    <HStack>
                      <VStack>
                        <GithubStats index={index} users={user.login} />
                      </VStack>
                      <VStack>
                        <GithubInfo index={index} users={user}/>
                      </VStack>
                    </HStack>
                  </Center>
                </CardBody>
              </Stack>
            </Card>
          </Center>
        ))}
      </>
    );
  }
}

export default GitApi;
