import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App() {
  return (
    <>
      <Button>Click</Button>
      <Input type="email" placeholder="Email" className='my-2' />
    </>
  )
}

export default App
