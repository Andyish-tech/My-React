import { useState } from "react";
import Card from "./component/card"

export default function App() {

  const cards=[
    {title:"Hi", description:"ISHIMWE"},
    {title:"Hi", description:"ISHIMWE"},
    {title:"Hi", description:"ISHIMWE"},
    {title:"Hi", description:"ISHIMWE"},
    
    
  ]
  return (
    <div className="grid grid-cols-4">

      {
        cards.map(c=>(
         <Card title={c.title}  description={c.description}  />
        ))
      }

   
    
    </div>
  )
}1
