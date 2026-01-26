import React from 'react';
function Card({title, description, button1, button2, btndisplay}) {
    const greet=()=>{
        console.log("Hello")
    }

    return (
        <div className='Card'>
            <h2>{title}</h2>
            <p >{description}</p>
            {
                btndisplay &&(
                    <>
                    <button onClick={function (){
                console.log('You Clicked A Button')
            }}>{button1}</button>
            <button onClick={greet}>{button2}</button>
                    </>
                )
            }
        </div>
        
    );
}

export default Card;