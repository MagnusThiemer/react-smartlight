import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import HeaderSettings from '../components/HeaderSettings';
import LightSettings from '../templates/LightSettings';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

const Settings = () => {
    const [lightSettings, setLightSettings] = useState({
        backgroundColor: '#000000',
        color: '#000000',
        boxShadow: `0px 0px 0px 0px`,
    })

    return ( 
        <>
            <HeaderSettings lightSettings={lightSettings}/>
            <LightSettings lightSettings={lightSettings} setLightSettings={setLightSettings}/>
            <Footer />
        </>
     );
}
 
export default Settings;