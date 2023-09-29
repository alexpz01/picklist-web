import './signup-success.scss'

export default function SignUpSucces({show = true}) {
    return <div style={{display : show ? "block" : "none"}} className="sign-up-success position-fixed w-100 min-vh-100 bg-red start-0 pt-5">
        <div className="container-sm p-5 d-flex flex-column align-items-center justify-content-center gap-3">
            <h2>Ya casi esta!</h2>
            <p>Te hemos enviado un email para confirmar tu cuenta</p>
            <p>No cierre esta ventana, cuando confirme sera redirigido automaticamente</p>
        </div>
    </div>
}