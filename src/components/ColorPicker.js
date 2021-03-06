import { motion } from 'framer-motion'

const colorClasses = ['bg-setting-red', 'bg-setting-green', 'bg-setting-blue', 'bg-setting-purple', 'bg-setting-pink', 'bg-setting-orange', 'bg-white']
const ColorPicker = ({lightSettings, setLightSettings}) => {
    const colorButtonVariants = {
        hidden: {
          marginRight: '-1rem',
          opacity: 1
        },
        visible: {
          marginRight: '0.5rem',
          opacity: 1,
          transition: {
            type: 'tween',
            delay: 0.7
          }
        },
      }

      const setColor = (event) => {
        let bgColor = window.getComputedStyle(event.target).backgroundColor;
        setLightSettings({
          ...lightSettings,
          backgroundColor: bgColor,
          color: bgColor
        })
      }


    return ( 
        <div className='flex ml-6'>
            {colorClasses.map((color, index) => (
                <motion.div 
                    className={`rounded-full h-7 w-7 grid ${color}`}
                    key={index}
                    variants={colorButtonVariants}
                    initial='hidden'
                    animate='visible'
                    onClick={(event) => setColor(event)}>
                        {color == 'bg-white' && <div className='text-text-dark font-bold place-self-center'>+</div>}
                </motion.div>
            ))}
  
        </div>
     );
}
 
export default ColorPicker;