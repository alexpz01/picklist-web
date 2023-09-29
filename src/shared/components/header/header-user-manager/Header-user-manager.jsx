import { Link } from "react-router-dom";

export default function HeaderUserManager({isMobile}) {

    return <div className={isMobile ? "header-user-manager d-flex flex-column" : "header-user-manager row justify-content-end align-items-center"}>
        <div className="w-auto underline-over">
            <Link to={"/login"} >
                <p className="m-0">Inicia sesión</p>
            </Link>
            
        </div>
        <Link className="w-auto" to={"/sign-up"} >
            <div type="button" className="button bg-red m-0">Registrate</div>
        </Link>
        
    </div>
}