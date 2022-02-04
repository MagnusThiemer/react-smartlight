import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs'
import Slider from '@mui/material/Slider';
import { useState } from 'react'

const LightSlider = () => {
    const color = '#F3D654'
    const [sliderColor, setSliderColor] = useState('rgb(209 213 219)')
    const marks = ['0','20','40','60','80', '100']
    const valuetext = 'value'
    const [lightIntensity, setLightIntensity] = useState('0')
    
    return ( 
        <div className="flex justify-between items-center p-6">
            <BsLightbulbOff className='text-gray-300 text-3xl mr-4'/>
            <Slider
                defaultValue={30}
                sx={{
                    color: sliderColor
                }}
                aria-label="Custom marks"
                defaultValue={0}
                step={0.1}
                marks
                
                valueLabelDisplay="off"
                min={0}
                max={1}
                onChange={(event) => {
                    setLightIntensity(event.target.value)
                    if(event.target.value === 0){
                        setSliderColor('rgb(209 213 219)')
                    } else {
                        setSliderColor('#F3D654')
                    }
                }}
                
            />
            <BsLightbulb className='text-gray-300 text-3xl ml-4' color={lightIntensity > 0 ? sliderColor : ''}/>
        </div>
     );
}
 
export default LightSlider;