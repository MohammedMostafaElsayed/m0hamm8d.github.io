import { useState } from "react";
import RegeterForm from "../component/regester/regester";
export default function Regester(){
    const[formInput, setFormInput] = useState({
        fname: "mohammed",
        lname: "mostafa",
        email: "a@g.com",
        userName: "mmm",
        password : '',
        confirmPassword: '',
        checked : false,

    })
    return(
        <RegeterForm input={formInput} setInput={setFormInput}/>
    );
}