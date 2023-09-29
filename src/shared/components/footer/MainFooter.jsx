import './main-footer.scss'
import image from '../../../assets/images/picklist-logo-day.png'
import FooterBot from './footer-bot/Footer-bot'
import FooterTop from './footer-top/Footer-top'

export default function MainFooter() {
    return <footer className="main-footer d-flex flex-column mt-5 bg-red overflow-hidden pb-3">
        <div className="footer-logo bg-white align-self-center rounded-circle">
            <img className='w-100' src={image} alt="" />
        </div>
        <div className="container">
            <FooterTop></FooterTop>
            <FooterBot></FooterBot>
        </div>
        
    </footer>
}