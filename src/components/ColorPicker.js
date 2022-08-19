import { motion } from 'framer-motion'
import ColorConverter from "cie-rgb-color-converter";
import { useContext } from 'react';
import { StateContext } from '../context/context';

const colorClasses = ['bg-setting-red', 'bg-setting-green', 'bg-setting-blue', 'bg-setting-purple', 'bg-setting-pink', 'bg-setting-orange', 'bg-white']
const ColorPicker = ({lightSettings, setLightSettings}) => {
  const {stateObject, setStateObject} = useContext(StateContext)

  function getRGBValues(str) {
    var vals = str.substring(str.indexOf('(') +1, str.length -1).split(', ');
    return {
      'r': vals[0],
      'g': vals[1],
      'b': vals[2]
    };
  }
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
        let color = window.getComputedStyle(event.target).backgroundColor
        let colorObject = getRGBValues(color);
        let xy = ColorConverter.rgbToXy(colorObject.r, colorObject.g, colorObject.b)
        setLightSettings({
          ...lightSettings,
          xy: [xy.x, xy.y],
          on: true
        })
        setStateObject({
          xy: [xy.x, xy.y],
          on: true
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