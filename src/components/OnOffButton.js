import { BiPowerOff } from 'react-icons/bi'
import { useState } from 'react'

const OnOffButton = () => {
    const [onOff, setOnOff] = useState('rgb(209 213 219)')
    const toggleOnOff = () => {
        if(onOff == '#FF9B9B'){
            setOnOff('rgb(209 213 219)')
        } else {setOnOff('#FF9B9B')}
    }

    return ( 
    <div className="grid rounded-full h-8 w-8 bg-white absolute -top-4 right-5 drop-shadow-[2px_2px_3px_rgba(12,59,123,0.4)]" onClick={() => toggleOnOff()}>
        <BiPowerOff className='place-self-center text-2xl' color={onOff}/>
    </div> 
    );
}
 
export default OnOffButton;