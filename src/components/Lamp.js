import LampImage from '../assets/light-bulb.svg'

const Lamp = () => {
    return ( 
        <div className='w-32 relative'>
            <img src={LampImage} alt="lamp graphic" className='cover-contain z-20 relative'/>
            <div className="absolute h-4 w-4 bg-black rounded-full -bottom-2 inset-x-14 z-10"></div>
        </div>
     );
}

export default Lamp;