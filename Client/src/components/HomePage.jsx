import React from 'react'
import ImageBox from './ImageBox'
import popUpService from "../services/popUp.service";
import { useState, useEffect } from "react";



function HomePage(props) {

    const checkForAdSeen = () =>{
        if (!sessionStorage.getItem('adSeen')){
            popUpService.popupFunc();
            sessionStorage.setItem("adSeen", "true")
            setAd("true")
            setTimeout(()=>{popUpService.removePopUp()}, 5000)
        }
    }
    
    const [adSeen, setAd ] = useState('');
    
    useEffect( () => {
        checkForAdSeen()
      }, [adSeen]);

    return (
            <main className="MainContent">
                <ImageBox language = {props.language}/>
            </main>
    )
}

export default HomePage
