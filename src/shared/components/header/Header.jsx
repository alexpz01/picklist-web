import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/picklist-logo-day.png'
import HeaderMobileMenu from './header-mobile-menu/Header-mobile'
import HeaderNav from './header-nav/Header-nav'
import HeaderUserManager from './header-user-manager/Header-user-manager'
import './header.scss'

export default function Header() {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const closeMenu = () => {
        setShowMobileMenu(false)
    }

    const openMenu = () => {
        setShowMobileMenu(true)
    }


    return <header className="main-header position-fixed top-0 start-0 w-100 py-2 px-3 bg-gray">
        <div className="row align-items-center justify-content-center">
            <Link className='w-auto' to={"/"}>
                <img className='image-logo w-auto' src={logo} alt="logo" />
            </Link>
            
            <div className="w-auto d-none d-md-block">
                <HeaderNav></HeaderNav>
            </div>
            <div className="col d-none d-md-block">
                <HeaderUserManager></HeaderUserManager>
            </div>
            <div className="w-auto d-md-none d-block">
                <FontAwesomeIcon onClick={() => {openMenu()}} icon={faBars}></FontAwesomeIcon>
            </div>
            
        </div>
        <HeaderMobileMenu closeFunction={closeMenu} show={showMobileMenu}></HeaderMobileMenu>
    </header>
}