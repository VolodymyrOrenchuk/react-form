import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SignUpForm from "./SignUpForm";
import {useState} from "react";
import {Link} from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import styles from './SignUpForm.module.css'
import LocalStorage from "../services/localStorage";

const inputsUsername = [{
    id: 1,
    name: "firstname",
    type: "text",
    placeholder: "First Name*",
    errorMessage: "First name should be 3-16 characters!(lat)",
    pattern: '^[A-Za-z0-9]{3,16}$',
    required: true,
}, {
    id: 2,
    name: "lastname",
    type: "text",
    placeholder: "Last Name*",
    errorMessage: "Last name should be 3-16 characters!(lat)",
    pattern: '^[A-Za-z0-9]{3,16}$',
    required: true,

}]
const inputs = [{
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Email Address*",
    errorMessage: "Invalid email",
    pattern: '^(([^<>()[\\].,;:\\s@"]+(\\.[^<>()[\\].,;:\\s@"]+)*)|(".+"))@(([^<>()[\\].,;:\\s@"]+\\.)+[^<>()[\\].,;:\\s@"]{2,})$',
    required: true,
}, {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password*",
    errorMessage: "Password must be at least 8 characters,1 uppercase,1 lowercase letter(lat)",
    pattern: '^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$',
    required: true,
},]

const SignUpInputs = () => {
    const [values, setValues] = useState({
        firstname: "", lastname: "", email: "", password: "",
    })

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        LocalStorage.set('items', values)
    }

    return <div className='app'>
        <form onSubmit={handleSubmit} className={styles.formSignUp}>
            <div className={styles.centerIcon}>
                <div className={styles.icon}>
                    <LockOutlinedIcon/>
                </div>
            </div>
            <div className={styles.signupLabel}>Sign up</div>
            <div className={styles.nameInputs}>
                <div className={styles.usernameInputs}>
                    {inputsUsername.map((input) => (
                        <SignUpForm
                        key={input.id} {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />))}
                </div>
                <div className={styles.emailpasswordInputs}>
                    {inputs.map((input) => (
                        <SignUpForm key={input.id} {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                    />))}
                </div>
            </div>

            <div className={styles.checkbox}>
                <Checkbox/>
                <p>I want to receive inspiration,marketing and updates via email.
                </p>
            </div>
            <div className={styles.signUpButton}>
                <button onSubmit={handleSubmit}>SIGN UP</button>
            </div>
            <Link to='/sign-in'>Already have an account? Sign in</Link>
        </form>
    </div>
}
export default SignUpInputs;