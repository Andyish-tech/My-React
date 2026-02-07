import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Obj() {
    
    const Name=[
        {
            name:'Jibu',
            age: 35,
            gender:'M'
        },
        {
            name:'Kwi',
            age: 13,
            gender:"M"
        },
        {
            name:'Wivine',
            age:18,
            gender:"F"
        }
    ];

    let book=[
    {
      title:"Black Pity",
      description:"The story of a black horse",
      button1:"Buy horse"
    },
    {
      title:"How to scam online",
      description:"This is a scam product",
      button1:"Buy me"
    }
  ]

  {/* Fetching from api */}

  


  return (
    <div className='obj'>
            {Name.map(name =>(
                <div className=""><h2>My name is {name.name} and am aged {name.age} and am {name.gender}</h2></div>
            ))}

             {
          book.map(books=>(
            <Card title={books.title} description={books.description} button1={books.button1} button2="Follow" btndisplay={true}> </Card>
          ))
        }

            

        
    </div>

  )
}
