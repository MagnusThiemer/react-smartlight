import H3 from '../components/H3'
import P from '../components/P'
import RoomIcon from '../components/RoomIcon';
import { Link } from 'react-router-dom'

const RoomCard = ({data}) => {

    localStorage.setItem(data.name, JSON.stringify(data))

    return ( 
        <Link to={`/settings/${data.name}`} className="bg-white rounded-3xl h-36 w-36 p-4 shadow-lg shadow-slate-300 flex flex-col justify-between items-start">
            <RoomIcon name={data.name} className='text-5xl mb-3 text-text-dark'/>
            <div>
                <H3 input={data.name.replace('-',' ')} className='font-bold text-text-dark'/>
                <P 
                    input={data.lights.length > 1 ? `${data.lights.length} lights` : `${data.lights.length} light`}  
                    className='text-highlight font-bold'
                />
            </div>
        </Link>
     );
}
 
export default RoomCard;