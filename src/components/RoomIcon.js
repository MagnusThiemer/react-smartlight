import bed from '../assets/bed.svg'
import house from '../assets/house.svg'
import bathtub from '../assets/bathtube.svg'
import kitchen from '../assets/kitchen.svg'
import balcony from '../assets/balcony.svg'
import room from '../assets/room.svg'
import key from '../assets/key.svg'
import collaboration from '../assets/collaboration.svg'

const RoomIcon = (props) => {
    return ( 
        <>
        {props.name === 'Bed-room' && <img src={bed} alt='bed room'/>}
        {props.name === 'Living-room' && <img src={room} alt='living room'/>}
        {props.name === 'Kitchen' && <img src={kitchen} alt='kitchen'/>}
        {props.name === 'Bathroom' && <img src={bathtub} alt='bathroom'/>}
        {props.name === 'Outdoor' && <img src={house} alt='outdoor'/>}
        {props.name === 'Balcony' && <img src={balcony} alt='balcony'/>}
        {props.name === 'Hall' && <img src={key} alt='hall' className='max-h-12'/>}
        {props.name === 'Dining-room' && <img src={collaboration} alt='dining room' className='max-h-12'/>}
        
        </>
     );
}
 
export default RoomIcon;