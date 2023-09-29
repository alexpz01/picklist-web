import Header from "../../shared/components/header/Header";
import SignUpForm from "./signup-form/SignUp-form";
import './sign-up.scss'

export default function SignUp() {
    return <div className="sign-up">
        <Header></Header>
        <div className="signup-form-container">
            <SignUpForm></SignUpForm>
        </div>
    </div>
}