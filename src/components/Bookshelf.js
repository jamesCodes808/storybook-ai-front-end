import React from 'react';
import axios from 'axios';
import { motion, useIsPresent } from 'framer-motion';
import { withAuth0 } from '@auth0/auth0-react';
import {
  Container,

  VStack,

  Center,
  Heading,
  Card,
  CardBody,
  Image,
  Button,


} from '@chakra-ui/react';
// import { motion } from 'framer-motion';
import { Link as ReactLink } from 'react-router-dom';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import CreateBook from './CreateBook';
import Book from './Book';
// import Login from '../Auth/Login';

const SERVER = process.env.REACT_APP_SERVER;

class Bookshelf extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticatedTemp: true,
      sampleProp: 'sample prop',
      createdBooks: [],
      index: 0,
    };
  }

  postBook = async (inputData) => {
    if (this.props.auth0.isAuthenticated) {
      console.log(inputData);

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
        console.log(this.state.createdBooks);
      } catch (err) {
        console.error(err);
      }
    }
  };

  getBooks = async () => {
    /* let apiUrl = `${SERVER}/books`
  
    try {
        const response = await axios.get(apiUrl);
        console.log(response.data)
        this.setState({ createdBooks: response.data });
    } catch (err) {
        console.error(err)
    } */

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

      this.setState({ createdBooks: booksResponse.data });
    }
  };

  updateBook = async () => {
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
      const response = await axios(config);
      console.log(response.data);
      this.getBooks();
    } catch (err) {
      console.error(err);
    }
  };

  async componentDidMount() {
    if (this.props.auth0.isAuthenticated) {
      this.getBooks();

      /* const res = await this.props.auth0.getIdTokenClaims();
  
      const jwt = res.__raw;
  
      const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/books'
      }
  
      const booksResponse = await axios(config);
  
      this.setState({ createdBooks: booksResponse.data }); */
    }
  }

  render() {
    console.log(this.props.auth0);
    console.log('created books', this.state.createdBooks)
    return (
      <>

        <motion.div
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{ duration: 0.5, ease: 'easeOut'}}
        exit={{opacity: 1}}
        className='absolute top-0 left-0 w-full h-full'
      >
          <VStack>
            {this.props.auth0.isAuthenticated ? (
              <>
                <Container>
                  <CreateBook
                    postBook={this.postBook}
                    test={this.state.sampleProp}
                  />
                </Container>
                {this.state.createdBooks.length > 0 ? (
                  <>
                    <Container>
                      {this.state.createdBooks.map((book) => {
                        return (
                          <Card style={{ textAlign: 'center' }}>
                            <Center>
                              <CardBody>
                                <Center>
                                  <Image
                                    src={`data:image /png;base64, ${book.cover}`}
                                    alt='book cover'
                                  />
                                </Center>
                                <Heading>{book.title}</Heading>
                                <Book
                                  book={book}
                                  deleteBook={this.deleteBook}
                                />
                              </CardBody>
                            </Center>
                          </Card>
                        );
                      })}
                    </Container>
                  </>
                ) : (
                  <h3>Your bookshelf is empty! Create a book now</h3>
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
          </VStack>
        </motion.div>

      </>
    );
  }
}

export default withAuth0(Bookshelf);
