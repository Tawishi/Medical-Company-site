import { React, useState } from 'react'
import data from "./ListData.json"

function List(props) {
    // console.log(data);
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        // console.log(el);
        //if no input the return the original
        if (props.input === '') {
            // return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}

export default List