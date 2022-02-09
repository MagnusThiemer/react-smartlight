import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Link } from 'react-router-dom';
import { AiOutlineBulb } from 'react-icons/ai'
import { IoMdBed } from 'react-icons/io'
import { GiDesk,GiBedLamp, GiDeskLamp, GiHomeGarage, GiTreehouse, GiStonePath } from 'react-icons/gi'
import { MdOutlineCountertops } from 'react-icons/md'
import { motion } from 'framer-motion'

const LightsScrollMenu = ({lightsArray, room}) => {
    const lightsScrollVariants = {
        hidden: {
          x: '100vw',
        },
        visible: {
          x: 0,
          transition: {
            type: 'tween',
            delay: 0.7
          }
        },
      }


    const setActive = (event) => {
      document.querySelector('.isActive').classList.remove('isActive', 'bg-text-dark', 'text-white');
      event.target.classList.add('isActive', 'bg-text-dark', 'text-white')
    }
    return ( 
        <motion.div 
            className='ml-6 pb-10 pt-6 overflow-hidden'
            variants={lightsScrollVariants}
            initial='hidden'
            animate='visible'
        >
            <ScrollMenu>
                {lightsArray.map((item, index) => (
                  <div>
                    <div className={`truncate p-3 pr-5 mr-3 font-bold rounded-2xl bg-white text-text-dark flex items-center ${index === 0 && 'isActive bg-text-dark text-white'}`} onClick={setActive}>

                        {item === 'Main-light' && <AiOutlineBulb className='mr-2 text-xl' onClick='none'/>}
                        {item === 'Bed-light' && <IoMdBed className='mr-2 text-xl' onClick='none'/>}
                        {item === 'Desk-lights' && <GiDesk className='mr-2 text-xl' onClick='none'/>}
                        {item === 'Corner-light' && <GiBedLamp className='mr-2 text-xl' onClick='none'/>}
                        {item === 'Table-lights' && <MdOutlineCountertops className='mr-2 text-xl' onClick='none'/>}
                        {item === 'Work-lights' && <GiDeskLamp className='mr-2 text-xl' onClick='none'/>}
                        {item === 'Garage-lights' && <GiHomeGarage className='mr-2 text-xl' onClick='none'/>}
                        {item === 'Garden-lights' && <GiTreehouse className='mr-2 text-xl' onClick='none'/>}
                        {item === 'Walkway-lights' && <GiStonePath className='mr-2 text-xl' onClick='none'/>}
                        {item === 'Side-lights' && <GiBedLamp className='mr-2 text-xl' onClick='none'/>}

                        {item.replace('-',' ')}
                    </div>

                  </div>
                ))}
            </ScrollMenu>
        </motion.div>


     );
}
 
export default LightsScrollMenu;