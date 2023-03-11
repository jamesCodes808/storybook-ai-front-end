import { Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Landingpage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        exit={{ opacity: 0 }}
        className='absolute top-0 left-0 w-full h-full'
      >
        <Center h='70.5vh' w='100vw' bg='gray.200'>
          <iframe
            scrolling='no'
            title='hello'
            style={{ width: '100vw', height: '80vh', position: 'static' }}
            src={'https://start-wring-042927.framer.app/'}
          />
        </Center>
      </motion.div>
    </>
  );
};

export default Landingpage;
