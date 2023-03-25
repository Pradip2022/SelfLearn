import { FC, useState } from "react"
export const ButtonIncrement:FC = ()=>{
    const [counter, setCounter] = useState(0); 
    const [challengeCounter, setChallengeCounter] = useState(5); 
    const clicked = () =>setCounter(counter+1)
    const challengeClicked = () =>setChallengeCounter(challengeCounter*2)
    return(
        <div>
            <button onClick = {clicked}>{counter}</button>
            <h1>challenge: make the label show 5 at launch and double the value every hit </h1>
            <button onClick = {challengeClicked}>{challengeCounter}</button>
        </div>

    )
}