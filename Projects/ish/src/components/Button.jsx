import React, { useState } from 'react';
const Button=()=>{
    const [name, myName] = useState('')
    const MyName=()=>{
        myName("ISHIMWE")
    }

    const [value,setVal] = useState(0);

    const Increment=()=>{
        setVal(value + 1)
    }

    const Dencrement=()=>{
        setVal(value - 1)
    }
    const Clear=()=>{
        setVal(0)
    }
    const array=[1,2,3,4,5,6,7,8,9]
    return(
        <>
        <button onClick={MyName}>
            Register
        </button>
        {name}

        <div className="Card">
            <h1>{value}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Dencrement}>Decrement</button>
            <button onClick={Clear}>Clear</button>

        </div>
        <div className="Card">
            {
                array.map(num=>(<p>Let count:{num}</p>))
            }
        </div>
        </>
    )
}
export default Button;