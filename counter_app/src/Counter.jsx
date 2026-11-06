import {useState} from 'react'


export default function CounterApp(){
    const [count, setCount] = useState(30)

    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setCount(count - 1)
    }
    function reset(){
        setCount(count * 0)
    }


    return(
       <div className="container">
    
        <h1>Counter App</h1>
        <p>Counter : {count}</p>
        <button onClick={increment}>increment by 1</button>
        <button onClick={decrement}>Decrement by 1</button>
        <button onClick={reset}>Reset to 0</button>
        <button onClick={function multiply(){
                setCount(count * 5)
                }}>Multiply</button>
       </div> 
    )
}