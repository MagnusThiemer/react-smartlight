import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Link } from 'react-router-dom';
import { AiOutlineBulb } from 'react-icons/ai'
import { IoMdBed } from 'react-icons/io'
import { GiDesk,GiBedLamp, GiDeskLamp, GiHomeGarage, GiTreehouse, GiStonePath } from 'react-icons/gi'
import { MdOutlineCountertops } from 'react-icons/md'
import { motion } from 'framer-motion'
import { StateContext } from '../context/context';
import { useContext, useEffect } from 'react';


const LightsScrollMenu = ({lightsArray, room}) => {
    const { fetchUrlAppendix, setFetchUrlAppendix } = useContext(StateContext)

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

    useEffect(() => {setFetchUrlAppendix(`/lights/${lightsArray[0].id}`)}, [])

    // i setActive skal id'et for hver enkelt lampe sendes til fetch url'en.
    const setActive = (event) => {
      document.querySelector('.isActive').classList.remove('isActive', 'bg-text-dark', 'text-white');
      event.target.classList.add('isActive', 'bg-text-dark', 'text-white')
      setFetchUrlAppendix(`/lights/${event.target.getAttribute('lightid')}`)
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
                  <div key={index}>
                    <div className={`truncate p-3 pr-5 mr-3 font-bold rounded-2xl bg-white text-text-dark flex items-center ${index === 0 && 'isActive bg-text-dark text-white'}`} onClick={setActive} lightid={item.id}>
                        {item.name === 'Main-light' && <AiOutlineBulb className='mr-2 text-xl pointer-events-none'/>}
                        {item.name === 'Bed-light' && <IoMdBed className='mr-2 text-xl pointer-events-none'/>}
                        {item.name === 'Desk-lights' && <GiDesk className='mr-2 text-xl pointer-events-none'/>}
                        {item.name === 'Corner-light' && <GiBedLamp className='mr-2 text-xl pointer-events-none'/>}
                        {item.name === 'Table-lights' && <MdOutlineCountertops className='mr-2 text-xl pointer-events-none'/>}
                        {item.name === 'Work-lights' && <GiDeskLamp className='mr-2 text-xl pointer-events-none'/>}
                        {item.name === 'Garage-lights' && <GiHomeGarage className='mr-2 text-xl pointer-events-none'/>}
                        {item.name === 'Garden-lights' && <GiTreehouse className='mr-2 text-xl pointer-events-none'/>}
                        {item.name === 'Walkway-lights' && <GiStonePath className='mr-2 text-xl pointer-events-none'/>}
                        {item.name === 'Side-lights' && <GiBedLamp className='mr-2 text-xl pointer-events-none'/>}

                        {item.name.replace('-',' ')}
                    </div>

                  </div>
                ))}
            </ScrollMenu>
        </motion.div>


     );
}
 
export default LightsScrollMenu;