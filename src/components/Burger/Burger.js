import React from 'react';
import BurgerIngrediant from './BurgerIngrediants/BurgerIngrediants';
import classes from './Burger.css';


const burger = (props) => {
    let transformedingrediants = Object.keys(props.ingridiants)
    .map(igkey => {
        console.log(igkey)
        return [...Array(props.ingridiants[igkey])].map((_,i) => {
            console.log(i)
            return <BurgerIngrediant key = {igkey+i} type = {igkey} />;
        });
    }).reduce((arr,el) => {
        return arr.concat(el)
    }, []);
    console.log(transformedingrediants);
    if(transformedingrediants.length === 0){
        transformedingrediants = <p>Start adding ingrediants!</p>
    }

    return (
        <div className = {classes.Burger} >
            <BurgerIngrediant type = "bread-top" />
            {transformedingrediants}
            <BurgerIngrediant type = "bread-bottom" />
        </div>
    );
}

export default burger;