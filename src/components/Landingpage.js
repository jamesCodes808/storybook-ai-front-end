import {
  Box,
  HStack,
  Stack,
  AbsoluteCenter,
  Center,
  Circle,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
// import {  } from 'framer-motion'

const Landingpage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
    >
      <Center h='100vh' w='99.1vw' bg='gray.200'>
        <iframe
          scrolling='no'
          title='hello'
          style={{ width: '100vw', height: '100vh', position: 'static' }}
          src={'https://start-wring-042927.framer.app/'}
        />
        {/* <Center h='100%' w='100%' bg='tomato'> */}
        {/* <Circle h='100%' w='100%'> */}
        {/* hello */}
        {/* </Circle> */}
        {/* </Center> */}
      </Center>
    </motion.div>
  );
};

export default Landingpage;
