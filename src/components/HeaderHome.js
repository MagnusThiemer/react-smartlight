import H1 from './H1'
import ProfileImage from './ProfileImage';

const HeaderHome = () => {
    return ( 
        <header className='bg-primary'>
            <div className="flex justify-between p-6 items-center">
                <H1 input='Control Panel' className='text-white text-2xl font-bold w-10'/>
                <ProfileImage />
            </div>
        </header>
     );
}
 
export default HeaderHome;