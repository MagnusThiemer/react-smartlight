
import { useState } from 'react';
import { motion } from 'framer-motion'
import ColorPicker from '../components/ColorPicker';

import LightSlider from '../components/LightSlider';
import OnOffButton from '../components/OnOffButton';
import ThemePicker from '../components/ThemePicker';
import { duration } from '@mui/material';

const LightSettings = () => {
    const variants = {
        hidden: {
            y: '100vh'
        },
        visible: {
            y: 0,
            transition: {
                ease: 'easeOut',
                duration: 0.5,
            }
        },
        exit: {
            y: '100vh',
            transition: {
                ease: 'easeOut',
                duration: 0.5
            }
        }
    }

    return ( 
        <motion.div 
            className="bg-background-offwhite pb-10 w-full rounded-t-3xl relative"
            variants={variants}
            initial='hidden'
            animate='visible'
        >
            <OnOffButton />
            <LightSlider />
            <ColorPicker />
            <ThemePicker />
        </motion.div>
     );
}
 
export default LightSettings;