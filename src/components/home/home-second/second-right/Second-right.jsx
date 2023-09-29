import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faClockFour, faListAlt } from '@fortawesome/free-regular-svg-icons'
import './second-right.scss'
import { faCheck, faUserClock } from '@fortawesome/free-solid-svg-icons'

export default function SecondRight() {
    return <div className="second-right col-md-7 col-12 row order-0 align-self-center">
        <div className="sr-icon-div col-6 d-flex align-items-center flex-column gap-md-4 gap-3 justify-content-center">
            <FontAwesomeIcon className='sr-icon bg-red w-auto display-0 rounded-3' icon={faUserClock} />
            <h2 className='display-5 fw-bold color-red'>Puntual</h2>
        </div>
        <div className="sr-icon-div col-6 d-flex align-items-center flex-column gap-md-4 gap-3 justify-content-center">
            <FontAwesomeIcon className='sr-icon bg-red w-auto display-0 rounded-3' icon={faListAlt} />
            <h2 className='display-5 fw-bold  color-red'>Ordenado</h2>
        </div>
        <div className="sr-icon-div col-12 d-flex align-items-center flex-column gap-md-4 gap-3 justify-content-center">
            <FontAwesomeIcon className='large sr-icon bg-red w-auto display-0 rounded-3' icon={faCheck} />
            <h3 className='display-5 fw-bold color-red'>Eficiente</h3>
        </div>
    </div>
}