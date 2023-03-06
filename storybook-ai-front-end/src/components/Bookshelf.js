import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Container, Center, VStack } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import CreateBook from './CreateBook';

class Bookshelf extends React.Component {

    constructor() {
        super()
        this.state = {
            authenticatedTemp: true,
            sampleProp: 'sample prop',
            createdBook: [],
            index: 0,
        }
    }


    postBook = async (inputData) => {
        let prompt = `create a 4 sentence story with 4 words each sentence of a ${inputData.noun} ${inputData.verb} at ${inputData.place}`
        console.log(prompt)
        // try {
        //     let newBook = await axios.post(`url`, inputData)
        //     console.log(newBook);
        // } catch (err) {
        //     console.error(err)
        // }
    }

    getBooks = async () => {

        try {

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

                    {this.state.authenticatedTemp ?
                        <>
                            {this.state.createdBook.length > 0 ?
                                <>
                                    <Container maxW='100'>
                                        <Carousel
                                            className='text-center'
                                            activeIndex={this.state.index}
                                            onSelect={this.handleSelectCarousel}
                                        >
                                            <Carousel.Item>
                                                <img></img>
                                                <Carousel.Caption>
                                                    page sentence here
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            {/* insert map that will map pages of the book when created */}

                                        </Carousel>
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
                        <p>login component</p>
                        // insert login component here 
                    }

                </VStack>

            </>
        )
    }

}

export default withAuth0(Bookshelf);