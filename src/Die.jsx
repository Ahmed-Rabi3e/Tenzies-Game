import React from "react"

export default function Die(props) {
    const styles ={
        backgroundColor: props.isHeld ? "#59E391":"white"
    }
    
    return (

        <div 
             className="h-12 w-12 shadow-xl rounded-lg flex justify-center items-center cursor-pointer bg-white"
             style={styles}
             onClick={props.holdDice}

         >
            <h2 className="text-3xl">{props.value}</h2>
        </div>
    )
}