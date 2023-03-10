import React from 'react';
import { Octokit } from '@octokit/rest';
import {
  Card,
  CardBody,
  Heading,
  Text,
  Button,
  Stack,
  HStack,
  Center,
  useDisclosure,
  Collapse,
  Box,
  Image,
} from '@chakra-ui/react';
import myPhoto from './headshot.png';
import sheldon from './face.jpg';
// import {
//   faFontAwesome,
//   faTwitter,
//   faGithub,
//   faLinkedin,
// } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            followers: user.followers,
            login: user.login,
            avatar: user.avatar_url,
            linkedIn: ['https://www.linkedin.com/in/james-ian-ragasa-solima/', 'https://www.linkedin.com/in/sheldon-pierce/', 'https://www.linkedin.com/in/ethanalbers/', 'https://www.linkedin.com/in/reed-vogt-student/'],
            twitter: ['https://twitter.com/jamesCodes808']
          })),
        });
      });
  }

  openButton() {}
  render() {
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
              width={'50%'}
              margin='10'
              paddingLeft={8}
            >
              {/* <GitApi /> */}
              <Image
                objectFit='cover'
                maxW={{ base: '60%', sm: '200px' }}
                src={user.avatar}
                alt='Sheldon Picture'
              />
              <Stack>
                <CardBody>
                  <Center>
                    <Heading size='md'>{user.name}</Heading>
                  </Center>

                  <Text py='2' fontSize={'20'}>
                    <span fontSize='40'>"</span>{user.bio}
                  </Text>
                  <Center>
                    <HStack marginBottom={'10'}>
                      <div className='profile-social-links'>
                        <a href={`${user.twitter[index]}`} target={'_blank'} rel='noreferrer'>
                          <FontAwesomeIcon icon='fa-brands fa-twitter' />
                          {'Twitter'}
                        </a>
                        <a href={`${user.linkedIn[index]}`} target={'_blank'} rel='noreferrer'>
                          <FontAwesomeIcon icon='fa-brands fa-linkedin' />
                          {'LinkedIn'}
                        </a>
                        <a href={`https://github.com/${user.login}`} target={'_blank'} rel='noreferrer'>
                          <FontAwesomeIcon icon='fa-brands fa-github' />
                          {'Github'}
                        </a>
                      </div>
                    </HStack>
                  </Center>
                  <Center>
                    <Button
                      w='40%'
                      key={0}
                      marginBottom={15}
                      onClick={null}
                      marginRight='20'
                      isDisabled
                    >
                      GitHub Stats
                    </Button>
                    <Button w='40%' marginBottom={15} onClick={null} isDisabled>
                      GitHub Info
                    </Button>
                  </Center>
                  <Collapse key={0} in={null}>
                    <Box width='100%'>
                      <Image
                        boxSize='400px'
                        src={`https://ghchart.rshah.org/HEXCOLORCODE/${user.login}`}
                        alt='Name Your Github chart'
                      />
                    </Box>
                  </Collapse>
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
