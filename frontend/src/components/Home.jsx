import {useContext} from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import { useCounterStore } from '../store/CounterStore'

function Home() {
  return (
    <div>
      
      <h1>welcome to employee management portal!</h1>
    </div>
  )
}

export default Home