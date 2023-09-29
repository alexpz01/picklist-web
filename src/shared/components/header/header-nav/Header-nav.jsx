export default function HeaderNav({isMobile = false}) {

    return <nav className={isMobile ? "d-flex flex-column" : "row align-items-center"}>
        <p className="w-auto m-0 underline-over">Saber más</p>
        <p className="w-auto m-0 underline-over">Contacto</p>
        <p className="w-auto m-0 underline-over">API</p>
    </nav>
}