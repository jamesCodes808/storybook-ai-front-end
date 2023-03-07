import React from 'react';
import axios from 'axios';

import { withAuth0 } from '@auth0/auth0-react';
import { Container, VStack, Center } from '@chakra-ui/react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import CreateBook from './CreateBook';
import Book from './Book';
// import Login from '../Auth/Login';

const SERVER = process.env.REACT_APP_SERVER;


class Bookshelf extends React.Component {

    constructor() {
        super()
        this.state = {
            authenticatedTemp: true,
            sampleProp: 'sample prop',
            createdBooks: [],
            index: 0,
        }
    }


    postBook = async (inputData) => {

        console.log(inputData)
        try {
            let newBook = await axios.post(`${SERVER}/books`, inputData)
            this.setState(prevState => ({ createdBooks: [...prevState.createdBooks, newBook] }));
            this.getBooks()
            console.log(this.state.createdBooks)
        } catch (err) {
            console.error(err)
        }
    }

    getBooks = async () => {
        let apiUrl = `${SERVER}/books`
        try {
            const response = await axios.get(apiUrl);
            console.log(response.data)
            this.setState({ createdBooks: response.data });
        } catch (err) {
            console.error(err)
        }
    }

    updateBook = async (book) => {
        try {

        } catch (err) {
            console.error(err)
        }
    }

    handleSelectCarousel = (selectedIdx) => {
        this.setState({
            index: selectedIdx
        })
    }

    componentDidMount() {
        this.getBooks();
    }

    render() {
        return (
            <>

                <VStack>

                    {this.props.auth0.isAuthenticated ?
                        <>
                            {this.state.createdBooks.length > 0 ?
                                <>
                                    <Container>
                                        {/* <Carousel
                                            className='text-center'
                                            activeIndex={this.state.index}
                                            onSelect={this.handleSelectCarousel}
                                        > */}
                                        {this.state.createdBooks.map(book => {
                                            return <Card style={{ textAlign: 'center' }}>
                                                <Center>
                                                    <Card.Img variant='top' src='https://picsum.photos/1'
                                                        style={{ width: '200px', height: '200px' }} />
                                                </Center>
                                                <Card.Body>
                                                    <Card.Title>{book.title}</Card.Title>
                                                    <Book
                                                        book={book} />
                                                </Card.Body>

                                            </Card>
                                        })}
                                        {/* <Carousel.Item>
                                                <img
                                                    alt=''></img>
                                                <Carousel.Caption>
                                                    { }
                                                </Carousel.Caption>
                                            </Carousel.Item> */}
                                        {/* insert map that will map pages of the book when created */}
                                        {/* 
                                        </Carousel> */}
                                    </Container>
                                </>
                                :
                                <h3>Your bookshelf is empty! Create a book now</h3>
                            }


                            {/* insert books and create book button */}
                            <Container>
                                <CreateBook
                                    postBook={this.postBook}
                                    test={this.state.sampleProp} />
                            </Container>

                        </>
                        :
                        <>
                            <h2>Login to create a story</h2>
                            {/* < /> */}
                        </>
                    }

                </VStack>

            </>
        )
    }

}

export default withAuth0(Bookshelf);