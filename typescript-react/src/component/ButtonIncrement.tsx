import { FC, useState } from "react"
export const ButtonIncrement:FC = ()=>{
    const [counter, setCounter] = useState(0); 
    const clicked = () =>{
        setCounter(counter+1)
    }
    return(
        <button onClick = {clicked}>{counter}</button>
    )
}