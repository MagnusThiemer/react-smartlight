import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Link } from 'react-router-dom';
import { AiOutlineBulb } from 'react-icons/ai'
import { IoMdBed } from 'react-icons/io'
import { GiDesk,GiBedLamp, GiDeskLamp, GiHomeGarage, GiTreehouse, GiStonePath } from 'react-icons/gi'
import { MdOutlineCountertops } from 'react-icons/md'
import { motion } from 'framer-motion'

const LightsScrollMenu = ({array}) => {
    const lightsScrollVariants = {
        hidden: {
          x: '100vw',
        },
        visible: {
          x: 0,
          transition: {
            type: 'spring',
            stiffness: 50,
            delay: 0.5
          }
        },
      }


    console.log(array)
    return ( 
        <motion.div 
            className='ml-6 pb-10 pt-6'
            variants={lightsScrollVariants}
            initial='hidden'
            animate='visible'
            >
            <ScrollMenu>
                {array.map((item) => (
                    <Link to='' className="" key={item.id}>
                        <div className="truncate p-3 pr-5 mr-3 font-bold rounded-2xl bg-white text-text-dark flex items-center">

                            {item === 'Main-light' && <AiOutlineBulb className='mr-2 text-xl'/>}
                            {item === 'Bed-light' && <IoMdBed className='mr-2 text-xl'/>}
                            {item === 'Desk-lights' && <GiDesk className='mr-2 text-xl'/>}
                            {item === 'Corner-light' && <GiBedLamp className='mr-2 text-xl'/>}
                            {item === 'Table-lights' && <MdOutlineCountertops className='mr-2 text-xl'/>}
                            {item === 'Work-lights' && <GiDeskLamp className='mr-2 text-xl'/>}
                            {item === 'Garage-lights' && <GiHomeGarage className='mr-2 text-xl'/>}
                            {item === 'Garden-lights' && <GiTreehouse className='mr-2 text-xl'/>}
                            {item === 'Walkway-lights' && <GiStonePath className='mr-2 text-xl'/>}
                            {item === 'Side-lights' && <GiBedLamp className='mr-2 text-xl'/>}

                            {item.replace('-',' ')}
                        </div>
                    </Link>
                ))}
            </ScrollMenu>
        </motion.div>


     );
}
 
export default LightsScrollMenu;