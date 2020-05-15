import React from 'react';
import classes from './Order.css'

const Order = (props) => {

    let ingrideants = [];
    for(let ingriName in props.ingri){
        ingrideants.push({
            name : ingriName,
            amount: props.ingri[ingriName]
        });
    }

    const ingriOut = ingrideants.map(ig => {
        return <span
                 key = {ig.name}
                 style = {{textTransform : 'capitalize',
                display : 'inline-block',
                margin: '0 8px',
                border:'1px solid #cccc',
                padding: '5px'  }}>{ig.name} ({ig.amount})</span>
    })
    return(
        <div className = {classes.Order}>
            <p>Ingrideants: {ingriOut}</p>
            <p>Price: <strong>Rupees {props.price.toFixed(2)}</strong></p>
        </div>
    );
}

export default Order;