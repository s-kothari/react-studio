// TODO: create a component that displays a single bakery item

import {useState} from "react";

export default function CartComponent(props){

    return(
        <div style = {{width: "250px"}}>
            <p>{props.cartComponent.name} {props.cartComponent.price} {props.count}</p>

        </div>
    )
}