import GitApi from './GitApi';
import { library } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';
import {
  faFontAwesome,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { useDisclosure, Text, Center } from '@chakra-ui/react';

library.add(faTwitter, faFontAwesome, faGithub, faLinkedin);

const About = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
      className='absolute top-0 left-0 w-full h-full'
    >
      <Center>
        <Text fontSize={'5xl'} fontWeight={'extrabold'}>About Us</Text>
      </Center>
      <GitApi />
    </motion.div>
  );
};

export default About;
