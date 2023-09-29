import image from '../../../../assets/images/second-image.png'
import './second-left.scss'

export default function SecondLeft() {
    return <div className="second-left bg-red col-md-5 col-12 order-md-0 order-1 d-flex flex-column justify-content-between align-items-md-end align-items-center position-relative">
        <div className="sl-text w-auto h-auto">
            <h3 className="display-1 fw-bold mt-5 w-auto">Llega siempre a tiempo</h3>
        </div>
        <img className='sl-image pe-md-5' src={image} alt="" />
    </div>
}