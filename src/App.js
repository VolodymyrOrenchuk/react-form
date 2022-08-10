import React from 'react';
import './App.css'
import SignUpInputs from "./components/SignUpInputs";
import { Routes, Route} from "react-router-dom";
import SignInForm from "./components/SignInForm";
import Home from "./components/Home";


const App = () => {
    return <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign-up" element={<SignUpInputs />}   />
            <Route path="/sign-in" element={<SignInForm />}  />
        </Routes>
    </div>
}
export default App