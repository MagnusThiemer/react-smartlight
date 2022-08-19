import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs'
import Slider from '@mui/material/Slider';
/* import Slider from "rc-slider"; */
/* import "rc-slider/assets/index.css"; */
import { useState } from 'react'
import { StateContext } from '../context/context';
import { useContext } from 'react';
import { useEffect, Suspense } from 'react';


const LightSlider = ({lightSettings, setLightSettings}) => {
    const {stateObject, setStateObject} = useContext(StateContext)
    const [brightness, setBrightness] = useState(undefined);
    let grey = 'rgb(209 213 219)'
    let yellow = '#F3D654'
    const [sliderColor, setSliderColor] = useState(grey)
    const [defaultValue, setDefaultValue] = useState(25);

    useEffect(() => {
            setDefaultValue(lightSettings.bri)
            if(lightSettings.on){
                setSliderColor(yellow)
            } else {
                setSliderColor(grey)
            }
    }, [stateObject])

    useEffect(() => {
        setDefaultValue(brightness)
        console.log(brightness)
        if(brightness == 0){
            setStateObject({
                bri: lightSettings.bri,
                on: false
            })
            setLightSettings({
                ...lightSettings,
                on: false,
            })
            setSliderColor(grey)
        } else {
            setStateObject({
                bri: brightness
            })
            setSliderColor(yellow)
            setLightSettings({
                ...lightSettings,
                on: true,
                bri: brightness
            })         
        }
    }, [brightness])
    
    return ( 
        <div className="flex justify-between items-center p-6">
            <BsLightbulbOff className='text-gray-300 text-3xl mr-4'/>
                 <Slider
                    sx={{color: sliderColor}}
                    aria-label="Custom marks"
                    step={25}
                    marks
                    value={defaultValue ? defaultValue : 50}
                    valueLabelDisplay="off"
                    min={0}
                    max={255}
                    onChange={(event) => setBrightness(event.target.value)}
                    /> 
            <BsLightbulb className='text-gray-300 text-3xl ml-4' color={lightSettings.on ? sliderColor : ''}/>
        </div>
    );
}
 
export default LightSlider;