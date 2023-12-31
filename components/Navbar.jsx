'use client';

import {motion } from 'framer-motion';
import {navVariants} from '../utils/motion';
import styles from '../styles'


const Navbar = () => (
  <motion.nav
  variants = {navVariants}
  initial='hidden'
  whileInView='show'
  className={`${styles.xPaddings} py-8 relative`}
  >
    
    <div className="absolute w-[50%] inset-0 gradient-01 "/>
    <div className={`${styles.innerWidth} flex justify-between 
    gap-8 mx-auto`}>
      <img src="/search.svg" alt="search icon" 
      className='w-[24px] h-[24px] object-contain' />
      <h2 className="text-white font-extrabold 
      text-[24px] lead-[30px]">MetaVerse</h2>
      <img src="/menu.svg" alt="menu icon " 
      className="object-contain w-[24px] h-[24px] " />

    </div>
  </motion.nav>
);

export default Navbar;
