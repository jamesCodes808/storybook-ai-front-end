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
import DeleteBook from './DeleteBook';
import EditBookTitle from './EditBookTitle'
import Pages from './Pages';


const Book = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const book = props.book;
    const deleteBook = props.deleteBook;
    const updateBookTitle = props.updateBookTitle;


    return (
        <>
            <Button
                m={4}
                onClick={onOpen}>Expand</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{book.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Pages
                            pages={book.pages}
                            cover={book.cover}
                        />

                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            mr={3}
                            onClick={onClose}>Close</Button>

                        <EditBookTitle
                            updateBookTitle={updateBookTitle}
                            book={book}>
                        </EditBookTitle>

                        <DeleteBook
                            deleteBook={deleteBook}
                            book={book}
                        />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export default Book;