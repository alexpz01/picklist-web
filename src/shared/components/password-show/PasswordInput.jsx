import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './passwordInput.scss'

// Component for password inputs, allows you to toggle the text visibility 
export default function PasswordInput({id, onInputChange = (event) => {}, classes = "", error=false}) {

    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = function() {
        if (showPassword) {
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    }

    return <div className="w-100 position-relative">
        <input id={id} onChange={(event) => {onInputChange(event)}} className={'input password-input w-100 fs-4 fw-light ' + classes} type={showPassword ? "text" : "password"} />
        <div className="position-absolute end-0 top-0 px-2 h-100 w-auto d-flex align-items-center justify-content-center">
            <FontAwesomeIcon  onClick={() => { togglePassword() }} className="fs-5 text-dark show-password-button" icon={faEye}></FontAwesomeIcon>
        </div>
    </div>
}