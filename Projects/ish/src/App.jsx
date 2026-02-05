import './App.css'
// import HOME from './components/Home'
import Card from './components/Card'
import Button from './components/Button'
import Obj from './components/Obj'

function App() {
  return (
    <>
      <div className='container'>
        {/* <HOME /> */}
      {/* <Card title="Hey" description="Am happy to day" button1="Follow" > </Card> */}
      <Card title="Hey" description="Am happy to day" button1="Click Me" button2="Follow" btndisplay={true}> </Card>
      <Card title="Hey" description="Am happy to day" button1="Follow" btndisplay={true}> </Card>
      <Button />
      <Obj />
      </div>
    </>
  )
}

export default App
