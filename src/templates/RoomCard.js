import H3 from '../components/H3'
import P from '../components/P'
import RoomIcon from '../components/RoomIcon';
import { Link } from 'react-router-dom'

const RoomCard = (props) => {

    localStorage.setItem(props.data.name, JSON.stringify(props.data))

    return ( 
        <Link key={props.key} to={`/settings/${props.data.name}`} className="bg-white rounded-3xl h-36 w-36 p-4 shadow-lg shadow-slate-300 flex flex-col justify-between items-start">
            <RoomIcon name={props.data.name} className='text-5xl mb-3 text-text-dark'/>
            <div>
                <H3 input={props.data.name.replace('-',' ')} className='font-bold text-text-dark'/>
                <P 
                    input={props.data.lights.length > 1 ? `${props.data.lights.length} lights` : `${props.data.lights.length} light`}  
                    className='text-highlight font-bold'
                />
            </div>
        </Link>
     );
}
 
export default RoomCard;