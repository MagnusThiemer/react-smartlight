import BackgroundBubbles from './BackgroundBubbles';
import H1 from './H1'
import ProfileImage from './ProfileImage';
import { motion } from 'framer-motion'

const HeaderHome = () => {
    const headerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                duration: 0.8
            }
        }
    }
    return ( 
        <>
        <header className='bg-primary w-screen relative'>
            <BackgroundBubbles />
            <motion.div 
                className="flex justify-between items-center px-6 py-10 max-w-full z-10 relative"
                variants={headerVariants}
                initial='hidden'
                animate='visible'>
                <H1 input='Control Panel' className='text-white text-2xl font-bold w-10'/>
                <ProfileImage />
            </motion.div>
        </header>
        </>
     );
}
 
export default HeaderHome;