import { GoLightBulb } from 'react-icons/go'
import { AiOutlineHome } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'

const Footer = () => {
    return ( 
        <footer className='bg-white py-4 px-20 drop-shadow-[0_-3px_3px_rgba(12,59,123,0.2)] w-full'>
            <div className="flex justify-between text-3xl text-text-dark">
                <GoLightBulb />
                <AiOutlineHome />
                <FiSettings />
            </div>
        </footer>
     );
}
 
export default Footer;