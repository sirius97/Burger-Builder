import React from 'react';
import BurgerIngrediant from './BurgerIngrediants/BurgerIngrediants';
import classes from './Burger.css';


const burger = (props) => {
    return (
        <div className = {classes.Burger} >
            <BurgerIngrediant type = "bread-top" />
            <BurgerIngrediant type = "cheese" />
            <BurgerIngrediant type = "salad" />
            <BurgerIngrediant type = "meat" />
            <BurgerIngrediant type = "bread-bottom" />
        </div>
    );
}

export default burger;