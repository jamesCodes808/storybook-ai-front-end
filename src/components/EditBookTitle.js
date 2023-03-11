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

const EditBookTitle = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const updateBookTitle = props.updateBookTitle;


    const handleSubmitEditBookTitle = (e) => {
        e.preventDefault();
        const request = {
            title: e.target.formTitle.value,
        }
        updateBookTitle(request);
        onClose();
    }

    return (
        <>
            <Center>
                <Button
                    mr={3}
                    onClick={onOpen}>Edit Title</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay>
                        <ModalContent>
                            <ModalHeader>Complete the prompt</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Form onSubmit={handleSubmitEditBookTitle}>
                                    <Form.Group>
                                        <Form.Label>Title: </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='What would you like to change the title to?'
                                            id='formTitle'></Form.Control>
                                    </Form.Group>

                                    <Center>
                                        <Button
                                            m={6}
                                            colorScheme={'blue'}
                                            type='submit'>Edit Book Title
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

export default EditBookTitle;