import HeaderHome from "../components/HeaderHome";
import LightsData from '../assets/data/data.json'
import RoomsNavigation from "../templates/RoomsNavigation";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <>
            <HeaderHome />
            <RoomsNavigation data={LightsData}/>
            <Footer />
        </>
     );
}
 
export default Home;