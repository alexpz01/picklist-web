import './home-third.scss'

export default function HomeThird() {
    return <div className="home-third vh-100 overflow-hidden bg-red row justify-content-center align-items-end position-relative">
        <div className="ht-content w-auto d-flex flex-column gap-5">
            <h1 className="ht-text fw-bold w-auto color-red">Empieza a <span className="bg-red p-3">usarlo ya</span></h1>
            <button className="btn bg-red py-3 px-5 fs-1 align-self-center">Crea tu cuenta</button>
            <div className="ht-background position-absolute bg-white rounded-circle "></div>
        </div>
    </div>
}