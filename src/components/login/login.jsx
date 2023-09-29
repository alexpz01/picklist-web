import Header from "../../shared/components/header/Header";
import LoginForm from "./loginForm/LoginForm";
import './login.scss'
import { useNavigate } from "react-router-dom";
import IsLoggedRequest from "../../services/api/IsLoggedRequest";
import { useEffect, useLayoutEffect } from "react";

export default function LoginComponent() {

    const navigation = useNavigate()

    // Checks if there is an existing session and if it is correct, if so, sends the user directly to the workspace.
    useLayoutEffect(() => {
        new IsLoggedRequest().isLogged().then(() => {
            navigation("/workspace")
        }).catch((error) => {})
    }, [])

    return <div className="login">
        <Header></Header>
        <div className="login-form-container bg-red">
            <LoginForm></LoginForm>
        </div>
    </div>
}