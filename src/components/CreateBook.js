
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Center
} from '@chakra-ui/react';
import Form from 'react-bootstrap/Form';

const CreateBook = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const postBook = props.postBook;


    const handleSubmitCreateBook = (e) => {
        e.preventDefault();
        const prompt = {
            title: e.target.formTitle.value,
            noun: e.target.formNoun.value,
            verb: e.target.formVerb.value,
            location: e.target.formLocation.value
        }
        postBook(prompt);
        onClose();
    }

    return (
        <>
            <Center>
                <Button
                    colorScheme={'blue'}
                    onClick={onOpen}>Create Book</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay>
                        <ModalContent>
                            <ModalHeader>Complete the prompt</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Form onSubmit={handleSubmitCreateBook}>
                                    <Form.Group>
                                        <Form.Label>Title: </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Whats the title of your book?'
                                            id='formTitle'></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Noun: </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter a person or thing'
                                            id='formNoun'></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Verb: </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter a verb or action'
                                            id='formVerb'></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Place: </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter a location, even the moon'
                                            id='formLocation'></Form.Control>
                                    </Form.Group>
                                    <Center>
                                        <Button
                                            m={6}
                                            colorScheme={'blue'}
                                            type='submit'>Create Book
                                        </Button>
                                    </Center>
                                </Form>
                            </ModalBody>
                        </ModalContent>
                    </ModalOverlay>
                </Modal>
            </Center>
        </>
    )
}



export default CreateBook;