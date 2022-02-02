import P from '../components/P'
import RoomCard from './RoomCard';
const RoomsNavigation = (props) => {
    return ( 
        <div className="bg-background-offwhite p-6 rounded-t-3xl">
            <P className='text-text-dark font-bold mb-4' input='All Rooms'/>
            <div className="flex flex-wrap gap-6 justify-between">
            {props.data.data.map((room) => (
                <RoomCard data={room} key={room.id}/>
            ))}
            </div>
        </div>
     );
}
 
export default RoomsNavigation;