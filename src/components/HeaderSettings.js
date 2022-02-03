import { useParams, Link } from 'react-router-dom';
import { MdOutlineArrowBackIos } from 'react-icons/md'

import H1 from './H1'
import H3 from './H3'
import Lamp from './Lamp';
import LightsScrollMenu from './LightsScrollMenu';
const HeaderSettings = (props) => {
    let { room } = useParams()
    const roomData = JSON.parse(localStorage.getItem(room))

    return ( 
        <header className='bg-primary w-screen'>
            <div className="flex justify-between items-start px-6 pb-6 max-w-full">
                <Link to='/home' className='flex items-center flex-wrap mt-6'>
                    <MdOutlineArrowBackIos className='text-white text-2xl font-bold w-10' />
                    <H1 input={`${room.replace('-', ' ')}`} className='text-white text-2xl font-bold w-10'/>
                    <H3 
                        input={roomData.lights.length > 1 ? `${roomData.lights.length} lights` : `${roomData.lights.length} light`}
                        className='w-full pl-10 pt-6 text-highlight font-bold'
                    />
                </Link>
                <Lamp />
            </div>
            <LightsScrollMenu array={roomData.lights} />
        </header>
     );
}
 
export default HeaderSettings;