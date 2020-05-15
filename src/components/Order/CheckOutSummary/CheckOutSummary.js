import React from 'react';
import Button from '../../UI/Button/Button';
import Burger from '../../Burger/Burger';
import classes from './CheckOutSummary.css'

const checkOutSummary = (props) => {
    return(
        <div className={classes.CheckOutSummary}>
            <h1>This is your order!</h1>
            <div style = {{width: '100%', margin: 'auto'}}>
                <Burger ingridiants = {props.ingridiants} />
            </div>
            <Button btnType = "Danger" clicked={props.cancel}>CANCLE</Button>
            <Button btnType = "Success" clicked={props.continue}>CONTINUE</Button>
        </div>
    );
}

export default checkOutSummary;