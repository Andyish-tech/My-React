import React, { useState } from 'react';
const Button=()=>{
    const [name, myName] = useState('Andy')
    const MyName=()=>{
        myName("ISHIMWE")
    }
    return(
        <>
        <button onClick={MyName}>
            Register
        </button>
        {name}
        </>
    )
}
export default Button;