

import { useEffect, useLayoutEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { useNavigate } from "react-router-dom";
import IsLoggedRequest from "../../services/api/IsLoggedRequest";
import MainFooter from "../../shared/components/footer/MainFooter";
import Header from "../../shared/components/header/Header";
import HomeFinal from "./home-final/Home-final";
import HomeMain from "./home-main/Home-main";
import HomeSecond from "./home-second/Home-second";
import HomeThird from "./home-third/Home-third";

export default function Home() {

    const navigation = useNavigate()


    // Checks if there is an existing session and if it is correct, if so, sends the user directly to the workspace.
    useEffect(() => {
        new IsLoggedRequest().isLogged().then(() => {
            navigation("/workspace")
        })
    }, [])

    return <div className="home">
        <Header></Header>
        <HomeMain></HomeMain> 
        <HomeSecond></HomeSecond> 
        <HomeThird></HomeThird>
        <HomeFinal></HomeFinal>
        <MainFooter></MainFooter>
    </div>
}