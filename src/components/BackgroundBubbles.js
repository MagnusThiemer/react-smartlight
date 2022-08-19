import { motion } from 'framer-motion'

const BackgroundBubbles = (props) => {
    const bubblesAnimationSettings = {
        hidden: {
            rotate: 0,
        },
        visible: {
            rotate: 90,
            x: '60vw',
                transition: {
                ease: 'easeIn',
                duration: 0.5
            }
        }
    }
    const bubblesAnimationHome = {
        hidden: {
            rotate: 90,
            x: '60vw'
        },
        visible: { 
            rotate: 0,
            x: 0,
            transition: {
                ease: 'easeIn',
                duration: 0.5
            }

        }
    }

    return ( 
    <motion.div 
        className="absolute"
        variants={props.variants === 'bubblesAnimationSettings' ? bubblesAnimationSettings : bubblesAnimationHome}
        initial='hidden'
        animate='visible'
    >
        <div className="absolute h-48 w-48 rounded-full bg-setting-blue z-0 opacity-20 -top-28 -left-10"></div>
        <div className="absolute h-48 w-48 rounded-full bg-setting-blue z-0 opacity-20 top-12 left-60"></div>
        <div className="absolute h-40 w-40 rounded-full bg-setting-blue z-0 opacity-20 top-28 left-6"></div>
    </motion.div> );
}
 
export default BackgroundBubbles;