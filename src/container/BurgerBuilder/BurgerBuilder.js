import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGRIDIANT_PRICE = {
    salad : 5.5,
    cheese : 10.25,
    meat : 25.7,
    bacon : 15.70
}
class BurgerBuilder extends Component{
    state = {
        ingridiants : {
            salad :0,
            cheese :0,
            meat :0,
            bacon :0
        },
        totalPrice: 4
    }

     addIngrediantsHandler = (type) =>{
        let oldingrediants = {...this.state.ingridiants}
        oldingrediants[type] = oldingrediants[type] + 1
        let oldprice = this.state.totalPrice
        oldprice = oldprice + INGRIDIANT_PRICE[type]
        this.setState({
            ingridiants : oldingrediants,
            totalPrice : oldprice
        })
    }
    removeIngrediantsHandler = (type) => {
        let oldingrediants = {...this.state.ingridiants}
        if(oldingrediants[type] <=0 ){
            return;
        }
        oldingrediants[type] = oldingrediants[type] - 1
        let oldprice = this.state.totalPrice
        oldprice = oldprice - INGRIDIANT_PRICE[type]
        this.setState({
            ingridiants : oldingrediants,
            totalPrice : oldprice
        })

    }
    render(){
        let disabledInfo = {
            ...this.state.ingridiants
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Burger ingridiants = {this.state.ingridiants}/>
                <BuildControls 
                addIngridiants = {this.addIngrediantsHandler}
                removeIngridiants = {this.removeIngrediantsHandler}
                disabled = {disabledInfo}
                price = {this.state.totalPrice}/>
                {console.log(this.state.totalPrice + '$')}
            </Aux>
        );
    }
}

export default BurgerBuilder;