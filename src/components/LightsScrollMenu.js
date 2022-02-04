import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Link } from 'react-router-dom';
import { AiOutlineBulb } from 'react-icons/ai'
import { IoMdBed } from 'react-icons/io'
import { GiDesk,GiBedLamp, GiDeskLamp, GiHomeGarage, GiTreehouse, GiStonePath } from 'react-icons/gi'
import { MdOutlineCountertops } from 'react-icons/md'

const LightsScrollMenu = ({array}) => {
    console.log(array)
    return ( 
        <div className='ml-6 pb-10 pt-6'>
            <ScrollMenu>
                {array.map((item) => (
                    <Link to='' className="" key={item.id}>
                        <div className="truncate p-3 mr-3 font-bold rounded-2xl bg-white text-text-dark flex items-center">

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
        </div>


     );
}
 
export default LightsScrollMenu;