import React from 'react';

function HOME() {
    const name='Ishimwe';
    const Name2= 'Andy';
    return (
        
        <div>
            {name== 'Ishimwe' ? "yes":"No"}
            {(name=="Ishimwe" && <h3>Welcome Ish</h3>)}
            <h1>Helloooo{name}</h1>
            <h2>Hellow{name} happy to see you {Name2}</h2>
        </div>
    );
}

export default HOME;