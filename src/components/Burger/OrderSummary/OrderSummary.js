import React from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const orderingr = Object.keys(props.ingrediants)
                        .map(igkey => {
                            return <li key={igkey}>{igkey}:{props.ingrediants[igkey]}</li>
                        })
    return(
        <Aux>
            <h3>Your Order!</h3>
            <p>Delicious burger with ingrediants:</p>
            <ul>
                {orderingr}
            </ul>
            <p><strong>Total Price : {props.price.toFixed(2)}$</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked = {props.orderCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.orderContinue}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;