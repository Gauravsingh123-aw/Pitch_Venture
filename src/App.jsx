import { useState } from 'react'
import './App.css'
import Registration from './components/Registration';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registration></Registration>
    </>
  );
}

export default App
