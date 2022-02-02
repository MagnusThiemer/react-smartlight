import { IoBedOutline } from 'react-icons/io5'
import { FaCouch } from 'react-icons/fa'
import { MdOutlineKitchen, MdOutlineBalcony } from 'react-icons/md'
import { BiBath } from 'react-icons/bi'
import { GiHouse } from 'react-icons/gi'

const RoomIcon = (props) => {
    return ( 
        <>
        {props.name === 'Bed room' && <IoBedOutline className={props.className}/>}
        {props.name === 'Living room' && <FaCouch className={props.className}/>}
        {props.name === 'Kitchen' && <MdOutlineKitchen className={props.className}/>}
        {props.name === 'Bathroom' && <BiBath className={props.className}/>}
        {props.name === 'Outdoor' && <GiHouse className={props.className}/>}
        {props.name === 'Balcony' && <MdOutlineBalcony className={props.className}/>}
        
        </>
     );
}
 
export default RoomIcon;