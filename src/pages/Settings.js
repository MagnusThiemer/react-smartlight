import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import HeaderSettings from '../components/HeaderSettings';
import LightSettings from '../templates/LightSettings';
import { Routes, Route } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import data from "../assets/data/data.json"
import { StateContext } from "../context/context"

const Settings = () => {

    const {fetchUrlAppendix, setFetchUrlAppendix} = useContext(StateContext)
    const {lightSettings, setLightSettings} = useContext(StateContext)
    const {stateObject, setStateObject} = useContext(StateContext)

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
      }, [fetchUrlAppendix])

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