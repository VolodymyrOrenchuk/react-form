import React, {useState} from 'react';
import styles from './SignUpForm.module.css'

const SignUpForm = (props) => {
    const [focused, setFocused] = useState(false)
    const { errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = () => {
        setFocused(true)
    }
    return (<div className={styles.formInput}>
        <input {...inputProps} onChange={onChange}
               onBlur={handleFocus}
               focused={focused.toString()}

        />
        <span>{errorMessage}</span>
    </div>);
}

export default SignUpForm;