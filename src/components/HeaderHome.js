import BackgroundBubbles from './BackgroundBubbles';
import H1 from './H1'
import ProfileImage from './ProfileImage';

const HeaderHome = () => {
    return ( 
        <>
        <header className='bg-primary w-screen relative'>
            <BackgroundBubbles />
            <div className="flex justify-between items-center px-6 py-10 max-w-full z-10 relative">
                <H1 input='Control Panel' className='text-white text-2xl font-bold w-10'/>
                <ProfileImage />
            </div>
        </header>
        </>
     );
}
 
export default HeaderHome;