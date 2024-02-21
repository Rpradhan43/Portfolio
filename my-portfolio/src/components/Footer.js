import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 70 } },
};

const Header = () => (
  <motion.header
    variants={headerVariants}
    initial="hidden"
    animate="visible"
  >
    <nav>
      {/* Navigation Links */}
    </nav>
  </motion.header>
);

export default Header;
