import './main-right.scss'
import image from '../../../../assets/images/main-image.png'

export default function MainRight() {
    return <div className="home-right h-100 d-flex flex-column p-5 position-relative">
        <div className="hr-text p mt-md-5">
            <h1 className="display-0 fw-bold">NO</h1>
            <h1 className="display-0 fw-bold">TE OLVIDES</h1>
            <h1 className="display-0 fw-bold">DE NADA</h1>
        </div>
        <div className="position-absolute bottom-0 start-0 d-flex ps-5 w-75 justify-content-md-start justify-content-center">
            <img src={image} alt="" className="d-main-image w-100" />
        </div>
        
    </div>
}