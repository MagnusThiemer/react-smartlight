import HeaderHome from "../components/HeaderHome";
import LightsData from '../assets/data/data.json'
import RoomsNavigation from "../templates/RoomsNavigation";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <div className="bg-primary">
            <HeaderHome />
            <RoomsNavigation data={LightsData}/>
            <Footer />
        </div>
     );
}
 
export default Home;