import bed from '../assets/bed.svg'
import house from '../assets/house.svg'
import bathtub from '../assets/bathtube.svg'
import kitchen from '../assets/kitchen.svg'
import balcony from '../assets/balcony.svg'
import room from '../assets/room.svg'

const RoomIcon = (props) => {
    return ( 
        <>
        {props.name === 'Bed-room' && <img src={bed} alt='bed room'/>}
        {props.name === 'Living-room' && <img src={room} alt='living room'/>}
        {props.name === 'Kitchen' && <img src={kitchen} alt='kitchen'/>}
        {props.name === 'Bathroom' && <img src={bathtub} alt='bathroom'/>}
        {props.name === 'Outdoor' && <img src={house} alt='outdoor'/>}
        {props.name === 'Balcony' && <img src={balcony} alt='balcony'/>}
        
        </>
     );
}
 
export default RoomIcon;