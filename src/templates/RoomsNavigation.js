import P from '../components/P'
import RoomCard from './RoomCard';
import { motion } from 'framer-motion'
const RoomsNavigation = (props) => {
    const variants = {
        hidden: {
            y: '100vh'
        },
        visible: {
            y: 0,
            transition: {
                ease: 'easeOut',
                duration: 0.5,
            }
        },
        exit: {
            y: '100vh',
            transition: {
                ease: 'easeOut',
                duration: 0.5
            }
        }
    }

    return ( 
        <motion.div 
            className="bg-background-offwhite p-6 rounded-t-3xl relative z-10"
            variants={variants}
            initial='hidden'
            animate='visible'
            >
            <P className='text-text-dark font-bold mb-4' input='All Rooms'/>
            <div className="flex flex-wrap gap-6 justify-between">
            {props.data.data.map((room) => (
                <RoomCard data={room} key={room.id}/>
            ))}
            </div>
        </motion.div>
     );
}
 
export default RoomsNavigation;