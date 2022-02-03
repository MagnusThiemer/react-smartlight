import HeaderHome from "../components/HeaderHome";
import LightsData from '../assets/data/data.json'
import RoomsNavigation from "../templates/RoomsNavigation";

const Home = () => {
    return ( 
        <div className="bg-primary">
            <HeaderHome />
            <RoomsNavigation data={LightsData}/>
        </div>
     );
}
 
export default Home;