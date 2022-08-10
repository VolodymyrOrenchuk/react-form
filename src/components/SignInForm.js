import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from './SignInForm.module.css'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LocalStorage from "../services/localStorage";

const SignInForm = () => {
    const [values, setValues] = useState(() =>({
        email: '', password: ''
    }))


    useEffect(() => {
        const isRemembered = LocalStorage.get('remember-me');
        if(isRemembered) {
            setValues({
                email : LocalStorage.get('items').email || "",
                password : LocalStorage.get('items').password || ""
            })
        }
    }, [])

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        const {email, password } = LocalStorage.get('items');

        if(email === values.email && password === values.password) {
            alert('Logged in successfully')
        } else {
            alert('Incorrect credentials')
        }

        // console.log(values)
    }

    const onRememberMeSelect = (e) => {
        const isChecked = e.target.checked
        LocalStorage.set('remember-me', isChecked);
    }

    return <div className={styles.main}>
        <div>
            <form onSubmit={handleSubmit} className={styles.signInForm}>
                <div className={styles.centericon}>
                    <div className={styles.icon}>
                        <LockOutlinedIcon className={styles.muiIcon}/>
                    </div>
                </div>
                <p className={styles.iconlabel}>Sign in</p>
                <input
                    className={styles.signInInputs}
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    onChange={onChange}
                    required
                    value={values.email}
                />
                <input
                    className={styles.signInInputs}
                    type="password"
                    name="password"
                    placeholder="Password*"
                    onChange={onChange}
                    value={values.password}
                    required/>
                <div className={styles.checkbox}>
                    <input type="checkbox"
                           // checked={valueRemember}
                           onChange={onRememberMeSelect}
                           name='remember'
                    />
                    <p>Remember me</p>
                </div>
                <button type='submit' >SIGN IN</button>
                <Link to="/sign-up">Don't have an account? Sign Up</Link>
            </form>
        </div>
    </div>
}

export default SignInForm