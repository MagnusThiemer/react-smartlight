import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import HeaderSettings from '../components/HeaderSettings';
import LightSettings from '../templates/LightSettings';

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