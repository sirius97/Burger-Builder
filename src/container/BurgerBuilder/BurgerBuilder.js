import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchasable(upingr) {
       /* this.setState({
            purchasable : upprice.toFixed(2) > 4
        })
        console.log("updatePurchasable:", upprice)*/
        let ingrediants = {...upingr}
        let sum = Object.keys(ingrediants)
                    .map(igkey => {
                        return ingrediants[igkey]
                    }).reduce((sum,el) => {
                        return sum + el
                    },0);
        this.setState({
            purchasable: sum > 0
        })

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
        console.log("addingr:", oldprice)
        this.updatePurchasable(oldingrediants)
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
        console.log("removeingr:", oldprice)
        this.updatePurchasable(oldingrediants)
    }

    orderNowHandler = () =>{
        this.setState({purchasing: true})
    }

    orderCanceledHandler = () => {
        this.setState({purchasing: false})
    }

    orderContinueHandler = () => {
        alert("You clicked continue!")
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
                <Modal show = {this.state.purchasing} backclicked = {this.orderCanceledHandler}>
                    <OrderSummary ingrediants = {this.state.ingridiants} 
                    price = {this.state.totalPrice}
                    orderCancel = {this.orderCanceledHandler}
                    orderContinue = {this.orderContinueHandler}/>
                </Modal>
                <Burger ingridiants = {this.state.ingridiants}/>
                <BuildControls 
                addIngridiants = {this.addIngrediantsHandler}
                removeIngridiants = {this.removeIngrediantsHandler}
                disabled = {disabledInfo}
                price = {this.state.totalPrice}
                purchasable = {this.state.purchasable}
                order = {this.orderNowHandler}/>
                
            </Aux>
        );
    }
}

export default BurgerBuilder;