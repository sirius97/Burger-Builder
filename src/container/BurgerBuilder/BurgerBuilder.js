import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    state = {
        ingridiants : {
            salad :2,
            cheese :1,
            meat :1,
            bacon :1
        }
    }
    render(){
        return(
            <Aux>
                <Burger ingridiants = {this.state.ingridiants}/>
                <div>Burger Control</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;