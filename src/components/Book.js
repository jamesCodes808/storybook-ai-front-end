import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react';

const Book = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const book = props.book;


    return (
        <>

            <Button onClick={onOpen}>Expand</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{book.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {book.story}
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            mr={3}
                            onClick={onClose}>Close</Button>
                        <Button>
                            Edit story
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export default Book;