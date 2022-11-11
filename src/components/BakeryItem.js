// TODO: create a component that displays a single bakery item

import {useState} from "react";

export default function BakeryItem(props){

    const item = props.item;
    return(
        <div style = {{width: "250px"}}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <img src = {item.image} width = "250px"></img>
            
            <h2>{item.price}</h2>
            <button onClick={() => props.addItem(props.index)}>Add item</button>
            <p>---------------------------------</p>
        </div>
    )
}