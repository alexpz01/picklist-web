import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../../../assets/images/picklist-logo-day.png'
import LoginRequest from '../../../services/api/LoginRequest'
import SignUpRequest from '../../../services/api/SignUpRequest'
import LoginUtils from '../../../services/login_utils/LoginUtils'
import SignUpComprober from '../../../services/signup_comprobe/SignUpComprober'
import LoadingBar from '../../../shared/components/loading-bar/LoadingBar'
import PasswordInput from '../../../shared/components/password-show/PasswordInput'
import './signup-form.scss'
import SignUpSucces from './signup-success/Signup-success'

export default function SignUpForm() {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    // Comprueba que todos los datos introducidos sean validos
    const submit = (event) => {
        event.preventDefault()
        setError("")
        const comprober = new SignUpComprober(name, username, mail, password, repeatPassword)
        if (!comprober.comprobeName()) {
            setError(comprober.textError)
            return false
        }
        if (!comprober.comprobeUserName()) {
            setError(comprober.textError)
            return false
        }
        if (!comprober.comprobeEmail()) {
            setError(comprober.textError)
            return false
        }
        if (!comprober.comprobePassword()) {
            setError(comprober.textError)
            return false
        }
        if (!comprober.comprobeRepeatPassword()) {
            setError(comprober.textError)
            return false
        }
        send()
    }


    // Send the information to the api
    const send = async () => {
        setLoading(true)
        const request = new SignUpRequest()
        request.setName(name)
        request.setUsername(username)
        request.setMail(mail)
        request.setPassword(password)
        await new Promise((resolve, reject) => {setTimeout(() => {resolve()}, 2000)})
        request.signUp().then(() => {
            afterSignUp()
            setLoading(false)
        }).catch((error) => {
            setError(error[0])
            setLoading(false)
        })
    }

    // Log in after registration
    const afterSignUp = () => {
        document.querySelector("#sign_up_form").reset()
        setSuccess(true)
        const interval = setInterval(() => {
            const request = new LoginRequest()
            request.setUsername(username)
            request.setPassword(password)
            request.login().then((token) => {
                clearInterval(interval)
                LoginUtils.login(token, false)     
                navigate("/workspace")
            }).catch(() => {})
        }, 2000)
    }

    return <div className="sign-up-form bg-red rounded-4">
        <header className="sf-header d-flex align-items-center gap-5">
            <img src={image} className="form-logo bg-white" alt="" />
            <p className='fs-3 fw-light m-0'>Sign-up</p>
        </header>
        <form id='sign_up_form' className='sf-form p-md-5 p-3 row' action="">
            <div className="field order-md-0 px-4 py-4 d-flex flex-column gap-2 col-md-6 col-12">
                <label className='' htmlFor="">Nombre completo</label>
                <input onChange={(e) => {setName(e.target.value)}} id='signup_name' autoComplete={'name'} className='input bg-white rounded fs-4 px-2 fw-light' type="text" />
            </div>
            <div className="field px-4 order-md-2 py-4 d-flex flex-column gap-2 col-md-6 col-12">
                <label className='' htmlFor="">Nombre de usuario</label>
                <input onChange={(e) => {setUsername(e.target.value)}} autoComplete={'username'} id='signup_username' className='input bg-white rounded fs-4 px-2 fw-light' type="text" />
            </div>
            <div className="field px-4 order-md-4 py-4 d-flex flex-column gap-2 col-md-6 col-12">
                <label className='' htmlFor="">Email</label>
                <input autoComplete={'email'} onChange={(e) => {setMail(e.target.value)}} id='signup_mail' className='input bg-white rounded fs-4 px-2 fw-light' type="mail" />
            </div>       
            <div className="field px-4 order-md-1 py-4 d-flex flex-column gap-2 col-md-6 col-12">
                <label className='' htmlFor="">Contraseña</label>
                <PasswordInput onInputChange={(e) => {setPassword(e.target.value)}} classes='bg-white rounded' id={"signup_pass"}></PasswordInput>
            </div>
            
            <div className="field px-4 order-md-3 py-4 d-flex flex-column gap-2 col-md-6 col-12">
                <label className='' htmlFor="">Repetir la contraseña</label>
                <PasswordInput onInputChange={(e) => {setRepeatPassword(e.target.value)}} classes='bg-white rounded' id={"signup_repeatpass"}></PasswordInput>
            </div>
            
            <div className=" col-md-6 order-md-5 col-12 align-self-end px-4 py-4">
                <button onClick={(e) => {submit(e)}} className='btn btn-dark w-100' style={{height : '50px'}}>Registrarse</button>
            </div>
        </form>
        <div className="px-5 pt-3">
            <LoadingBar theme='white' show={loading}></LoadingBar>
        </div>
        <p className="error text-danger p-3 bg-white" style={{width : 'fit-content', borderTopRightRadius: "20px"}}>{error}</p>
        <SignUpSucces show={success}></SignUpSucces>
    </div>
}