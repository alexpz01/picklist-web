import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../../../assets/images/picklist-logo-day.png'
import LoginRequest from '../../../services/api/LoginRequest'
import LoginUtils from '../../../services/login_utils/LoginUtils'
import LoadingBar from '../../../shared/components/loading-bar/LoadingBar'
import PasswordInput from '../../../shared/components/password-show/PasswordInput'
import './login-form.scss'

export default function LoginForm() {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const [keepSession, setKeepSession] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const showError = function(errorMsj = "") {
        setError(errorMsj)
    }

    // Sends the information entered in the login form to the api
    const submit = async function() {
        showError("")
        setLoading(true)

        const req = new LoginRequest()
        req.setUsername(username)
        req.setPassword(password)
        await new Promise((resolve, reject) => {setTimeout(() => {resolve()}, 2000)})
        req.login().then((token) => {
            setLoading(false)
            LoginUtils.login(token, keepSession)
            navigate("/workspace")
        }).catch((error) => {
            showError(error[0])
            setLoading(false)
        })
    }



    return <div className="login-form bg-red">
        <div className="form-container d-flex flex-column bg-white p-md-5 p-3 rounded gap-5">
            <LoadingBar show={loading}></LoadingBar>
            <div className="logo align-self-center text-center d-flex flex-column gap-2">
                <img className='align-self-center' src={image} alt="" />
                <p className='text-dark fw-light fs-4 m-0'>Log-in</p>
            </div>
            <form id="login_form" className='lf-form d-flex flex-column gap-4' action="">
                <div className="field d-flex flex-column gap-2">
                    <label className='text-dark fs-5' htmlFor="">Username</label>
                    <input onChange={(event) => {setUsername(event.target.value)}} id='login_username' className='input fs-4 px-2 fw-light' type="text" />
                </div>
                <div className="field d-flex flex-column gap-2 position-relative">
                    <label className='text-dark fs-5' htmlFor="">Password</label>
                    <PasswordInput onInputChange={(event) => {setPassword(event.target.value)}} id={"login_password"}></PasswordInput>
                        
                </div>
                <div className="field d-flex gap-2 align-items-center">
                    <input onChange={(event) => {setKeepSession(event.target.checked)}} id='keep_session' type="checkbox" />
                    <label className='text-dark' htmlFor="keep_session">Mantener sesion iniciada</label>
                </div>
            </form>
            <button onClick={() => {submit()}} className="lf-submit btn btn-dark py-3">Iniciar sesion</button>
            <p className='error m-0 text-center fw-light text-danger'>{error}</p>
        </div>
    </div>
}