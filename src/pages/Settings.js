import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import HeaderSettings from '../components/HeaderSettings';
import LightSettings from '../templates/LightSettings';
import { Routes, Route } from 'react-router-dom'

const Settings = () => {
    return ( 
        <>
            <HeaderSettings />
            <LightSettings />
            <Footer />
        </>
     );
}
 
export default Settings;