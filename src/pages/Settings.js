import Footer from '../components/Footer';
import HeaderSettings from '../components/HeaderSettings';
import LightSettings from '../templates/LightSettings';
import { useContext, useEffect } from 'react';
import data from "../assets/data/data.json"
import { StateContext } from "../context/context"

const Settings = () => {

    const {fetchUrlAppendix} = useContext(StateContext)
    const {lightSettings, setLightSettings} = useContext(StateContext)
    const {stateObject} = useContext(StateContext)

    const baseUrl = data.url;

    useEffect(() => {
        let url = `${baseUrl}${fetchUrlAppendix}`;
        let isMounted = true;
        fetch(url)
        .then(response => response.json())
        .then(data => {
          if(isMounted){
              setLightSettings(data.state)
          }
        })
        return () => {isMounted = false}
      }, [fetchUrlAppendix, baseUrl])

    useEffect(() => {
        let url = `${baseUrl}${fetchUrlAppendix}/state`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(stateObject)
        })
    }, [stateObject])

    return ( 
        <>
            <HeaderSettings lightSettings={lightSettings}/>
            <LightSettings lightSettings={lightSettings} setLightSettings={setLightSettings}/>
            <Footer />
        </>
     );
}
 
export default Settings;