import LampImage from '../assets/light-bulb.svg'

const Lamp = ({lightSettings}) => {
    return ( 
        <div className='w-32 relative'>
            <img src={LampImage} alt="lamp graphic" className='cover-contain z-20 relative'/>
            <div className={`absolute h-4 w-4 rounded-full -bottom-2 inset-x-14 z-10`} style={lightSettings}></div>
        </div>
     );
}

export default Lamp;