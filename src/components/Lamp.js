import { useEffect, useState, useContext } from 'react';
import LampImage from '../assets/light-bulb.svg'
import ColorConverter from "cie-rgb-color-converter";
import { StateContext } from '../context/context';

const Lamp = ({lightSettings}) => {
    const { fetchUrlAppendix } = useContext(StateContext)
    const [style, setStyle] = useState({});

    useEffect(() => {
        let rgb;
        let bri;
        if(lightSettings.xy){ 
            rgb = ColorConverter.xyBriToRgb(lightSettings.xy[0], lightSettings.xy[1], lightSettings.bri);
            bri = Math.ceil((lightSettings.bri/255)*10);
        }

        lightSettings.xy ? setStyle({
            'backgroundColor': `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
            'color': `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
            'boxShadow': `0px 0px 10px ${bri}px`
        }) : setStyle({
            'backgroundColor': 'black'
        });
    }, [lightSettings, fetchUrlAppendix])
    return ( 
        <div className='w-32 relative'>
            <img src={LampImage} alt="lamp graphic" className='cover-contain z-20 relative'/>
            <div className={`absolute h-4 w-4 rounded-full -bottom-2 inset-x-14 z-10`} style={style}></div>
        </div>
     );
}

export default Lamp;