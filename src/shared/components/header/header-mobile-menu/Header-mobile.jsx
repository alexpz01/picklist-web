import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import HeaderNav from "../header-nav/Header-nav";
import HeaderUserManager from "../header-user-manager/Header-user-manager";
import './header-mobile.scss'

export default function HeaderMobileMenu({closeFunction, show}) {

    const showClass = show ? "show" : ""

    return <div className={showClass + " mobile-menu position-fixed top-0 bg-gray p-5 h-100 d-flex d-md-none flex-column gap-5"}>
        <div onClick={() => {closeFunction()}} className="close w-auto align-self-end">
            <FontAwesomeIcon className="fs-2" icon={faClose}></FontAwesomeIcon>
        </div>
        <HeaderNav isMobile={true}></HeaderNav>
        <HeaderUserManager isMobile={true}></HeaderUserManager>
    </div>
}