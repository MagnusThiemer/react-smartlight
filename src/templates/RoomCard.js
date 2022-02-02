import H3 from '../components/H3'
import P from '../components/P'
import RoomIcon from '../components/RoomIcon';

const RoomCard = (props) => {
    return ( 
        <div className="bg-white rounded-3xl h-36 w-36 p-4 shadow-lg shadow-slate-300">
            <RoomIcon name={props.data.name} className='text-5xl mb-3 text-text-dark'/>
            <H3 input={props.data.name} className='font-bold text-text-dark'/>
            <P 
                input={props.data.lights.length > 1 ? `${props.data.lights.length} lights` : `${props.data.lights.length} light`}  
                className='text-highlight font-bold'/>
        </div>
     );
}
 
export default RoomCard;