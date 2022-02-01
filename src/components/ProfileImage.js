import Image from '../assets/profile-image.jpg'

const ProfileImage = () => {
    return ( 
    <div className="h-14 w-14 relative">
        <img src={Image} alt="profile image" className='min-h-full object-cover rounded-full border-white border-2'/>
        <div className="absolute h-2 w-2 bg-setting-red top-1 right-1 rounded-full"></div>
    </div> );
}
 
export default ProfileImage;