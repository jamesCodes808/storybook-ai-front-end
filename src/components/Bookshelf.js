import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { withAuth0 } from '@auth0/auth0-react';
import {
  Container,
  Center,
  Heading,
  Card,
  CardBody,
  Image,
  Button,
  SimpleGrid,
  Box,
  Progress,
  Text,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import CreateBook from './CreateBook';
import Book from './Book';

const SERVER = process.env.REACT_APP_SERVER;

class Bookshelf extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticatedTemp: true,
      sampleProp: 'sample prop',
      createdBooks: [],
      index: 0,
      hasBooks: true,
    };
  }

  postBook = async (inputData) => {
    if (this.props.auth0.isAuthenticated) {

      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
      };

      try {
        let newBook = await axios.post(`${SERVER}/books`, inputData, config);
        this.setState((prevState) => ({
          createdBooks: [...prevState.createdBooks, newBook],
        }));
        this.getBooks();
      } catch (err) {
        console.error(err);
      }
    }
  };

  getBooks = async () => {

    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'get',
        baseURL: SERVER,
        url: '/books',
      };

      const booksResponse = await axios(config);

      booksResponse.status === 200
        ? this.setState({ hasBooks: true, createdBooks: booksResponse.data })
        : this.setState({ hasBooks: false })
    }
  };

  updateBookTitle = async () => {
    try {
    } catch (err) {
      console.error(err);
    }
  };

  deleteBook = async (id) => {
    const res = await this.props.auth0.getIdTokenClaims();

    const jwt = res.__raw;

    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: 'delete',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/books/${id}`,
    };

    try {
      await axios(config);
      this.getBooks();
    } catch (err) {
      console.error(err);
    }
  };

  async componentDidMount() {
    if (this.props.auth0.isAuthenticated) {
      this.getBooks();
    }
  }

  render() {
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          exit={{ opacity: 0 }}
          className='absolute top-0 left-0 w-full h-full'
        >
          {this.props.auth0.isAuthenticated ? (
            <>
              <Container mt='30px'>
                <CreateBook
                  postBook={this.postBook}
                  test={this.state.sampleProp}
                />
              </Container>

              {this.state.createdBooks.length > 0 &&
                this.state.hasBooks === true ? (
                <>
                  <SimpleGrid
                    templateColumns='repeat(auto-fill, minmax(300px, 1fr))'
                    m={10}
                    spacing='30px'
                  >
                    {this.state.createdBooks.map((book) => {
                      return (
                        <Box>
                          <Card
                            style={{ textAlign: 'center' }}
                            className='storybook-container'
                            maxW='md'
                            sx={{
                              ':hover': {
                                transition: 'transform 0.5s',
                                transform: 'translateY(-10px)',
                                boxShadow: '0 40px 43px -60px #595959',
                              },
                            }}
                            h='100%'
                          >
                            <Center>
                              <CardBody>
                                <Center>
                                  <Image
                                    src={`data:image /png;base64, ${book.cover}`}
                                    alt={book.title}
                                  />
                                </Center>
                                <Heading>{book.title}</Heading>
                                <Book
                                  book={book}
                                  deleteBook={this.deleteBook}
                                  updateBookTitle={this.updateBookTitle}
                                />
                              </CardBody>
                            </Center>
                          </Card>
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                </>
              ) : this.state.hasBooks === true ? (
                <>
                  <Box h={'65vh'}>
                    <Center h={'30vh'}></Center>
                    <Progress size='md' isIndeterminate />
                  </Box>
                </>
              ) : (
                <Text fontSize={'3xl'} fontWeight={'semibold'}>
                  Your bookshelf is empty! Create a book now
                </Text>
              )}
            </>
          ) : (
            <>
              <Alert
                status='error'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='70.5vh'
              >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                  Warning!
                </AlertTitle>
                <AlertDescription mb='2' maxWidth='sm'>
                  You need to be logged in to access your bookshelf.
                </AlertDescription>
                <Button colorScheme='blue' as={ReactLink} to='/login'>
                  Sign In
                </Button>
              </Alert>
            </>
          )}
        </motion.div>
      </>
    );
  }
}

export default withAuth0(Bookshelf);
