import { useState } from 'react'
import Suma from './componentes/suma.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Suma />
  )
}

export default App
