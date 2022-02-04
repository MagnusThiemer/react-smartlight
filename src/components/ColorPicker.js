import { motion } from 'framer-motion'

const colorClasses = ['bg-setting-red', 'bg-setting-green', 'bg-setting-blue', 'bg-setting-purple', 'bg-setting-pink', 'bg-setting-orange', 'bg-white']
const ColorPicker = () => {
    const colorButtonVariants = {
        hidden: {
          marginRight: '-1rem',
          opacity: 1
        },
        visible: {
          marginRight: '0.5rem',
          opacity: 1,
          transition: {
            type: 'spring',
            delay: 0.5
          }
        },
      }


    return ( 
        <div className='flex ml-6'>
            {colorClasses.map((color) => (
                <motion.div 
                    className={`rounded-full h-7 w-7 ${color}`}
                    variants={colorButtonVariants}
                    initial='hidden'
                    animate='visible'>
                </motion.div>
            ))}
  
        </div>
     );
}
 
export default ColorPicker;