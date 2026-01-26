import React from 'react';
function Card() {
    const greet=()=>{
        console.log("Hello")
    }
    return (
        <div className='Card'>
            <p >This is paragraph</p>
            <button onClick={function (){
                console.log('You Clicked A Button')
            }}>Click me</button>
            <button onClick={greet}>Allow fun</button>
        </div>
        
    );
}

export default Card;