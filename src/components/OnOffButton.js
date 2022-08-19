import { BiPowerOff } from 'react-icons/bi'
import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../context/context';

const OnOffButton = ({lightSettings, setLightSettings}) => {
    const {stateObject, setStateObject} = useContext(StateContext)

    const [color, setColor] = useState('');
    
    useEffect(() => {
        if(lightSettings.on){
            setColor('#FF9B9B');
            setStateObject({on: true})
        } else {
            setColor('rgb(209 213 219)');
            setStateObject({on: false})
        }
    }, [lightSettings])

    return ( 
    <div className="grid rounded-full h-8 w-8 bg-white absolute -top-4 right-5 drop-shadow-[2px_2px_3px_rgba(12,59,123,0.4)]" onClick={() => setLightSettings({...lightSettings, on: !lightSettings.on})}>
        <BiPowerOff className='place-self-center text-2xl' color={color}/>
    </div> 
    );
}
 
export default OnOffButton;