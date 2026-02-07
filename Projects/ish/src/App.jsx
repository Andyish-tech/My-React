import { useState } from 'react';
import './App.css'
// import HOME from './components/Home'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [post, setPost]=useState(null)
  const [loading, setload]=useState(true)
  const[error,setError]=useState()
  fetch("https://jsonplaceholder.typicode.com/postss",{method:"GET"})
  .then((posts)=>{
    if(!posts.ok){
      throw new Error('something went wrong')
    }
    return posts.json()
  })
  .then((data)=>{
   
    setPost(data)
  })
  .then(()=> setload(false))
  .catch((err)=>setError(err.message))
  return (
    <>
      <div className='container'>
        {/* <HOME /> */}
      {/* <Card title="Hey" description="Am happy to day" button1="Follow" > </Card> */}
      <Card title="Hey" description="Am happy to day" button1="Click Me" button2="Follow" btndisplay={true}> </Card>
      <Card title="Hey" description="Am happy to day" button1="Follow" btndisplay={true}> </Card>
      <Button />
      {/* <Obj /> */}
      {
        loading && <p>Loading...</p>
      }
      {
        error && <p className='Error'>{error}</p>
      }
      {

      post &&  post.map(post=>(
          <Card title={post.title} description={post.body} button1={post.button1} button2="Follow" btndisplay={true}> </Card>
        ))}

      </div>
    </>
  )
}

export default App
