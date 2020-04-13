import React from 'react';
import Aux from '../../../hoc/Auxi';

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
        </Aux>
    );
}

export default orderSummary;