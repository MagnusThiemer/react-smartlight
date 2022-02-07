import { HiOutlineLightBulb } from 'react-icons/hi'
import { motion } from 'framer-motion'

const ThemePicker = () => {
    const themes = [{
        name: 'Birthday',
        colorFrom: 'from-setting-red',
        colorTo: 'to-setting-orange'
    }, {
        name: 'Party',
        colorFrom: 'from-setting-pink',
        colorTo: 'to-setting-purple'
    }, {
        name: 'Relax',
        colorFrom: 'from-setting-blue',
        colorTo: 'to-setting-blue'
    }, {
        name: 'Fun',
        colorFrom: 'from-setting-orange',
        colorTo: 'to-setting-green'
    }]

    const themeButtonVariants = {
        hidden: {
          x: '-70px',
          opacity: 1
        },
        visible: {
          x: '0',
          opacity: 1,
          transition: {
            type: 'tween',
            delay: 0.7
          }
        },
      }

    return ( 
        <div className="flex flex-wrap p-6 gap-4 justify-between">
            {themes.map((theme) => (
                    
                    <motion.div 
                        className={`flex text-white items-center bg-gradient-to-tr ${theme.colorFrom} ${theme.colorTo} p-4 rounded-2xl flex-1 w-2/5`}
                        variants={themes.indexOf(theme) % 2 !== 0  && themeButtonVariants}
                        initial='hidden'
                        animate='visible'
                        
                        >
                        
                        <HiOutlineLightBulb className='text-2xl mr-3'/>
                        {theme.name}
                    </motion.div>
            ))}
        </div>
     );
}
 
export default ThemePicker;