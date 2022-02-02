import LampImage from '../assets/output-onlinepngtools.png'

const Lamp = () => {
    return ( 
        <div className='w-32 relative'>
            <img src={LampImage} alt="lamp graphic" className='cover-contain z-20 relative'/>
            <div className="absolute h-5 w-5 bg-gray-300 rounded-full -bottom-2 inset-x-14 z-10"></div>
        </div>
     );
}

export default Lamp;