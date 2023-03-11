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

const DeleteBook = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const book = props.book;
    const deleteBook = props.deleteBook;

    const handleClickDelete = (e) => {
        e.preventDefault();
        deleteBook(book._id)
        onClose()
    }

    return (
        <>
            <Button
                colorScheme={'red'}
                mr={3}
                onClick={onOpen}>Delete</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>Are you sure you want to delete this book?</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {book.title}
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                colorScheme={'red'}
                                onClick={handleClickDelete}>
                                Yes
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>

        </>
    )
}

export default DeleteBook;