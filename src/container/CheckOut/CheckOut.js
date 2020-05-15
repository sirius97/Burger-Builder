import React, {Component} from 'react';
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import {Route} from 'react-router-dom';
import ContactData from '../CheckOut/ContactData/ContactData';

class CheckOut extends Component{
    state = {
        ingridiants: null,
        totalPrice : 0
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search)
        const ingridiants = {}
        let price = 0
        for(let params of query.entries()){
            //['salad','1']
            if(params[0]==='price'){
                price = params[1]
            }else{
                ingridiants[params[0]] = +params[1]
            }
        }
        this.setState({
            ingridiants: ingridiants,
            totalPrice : price
        })

    }

    cancelHandler = () => {
        this.props.history.goBack()
    }

    continueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render(){
        return(
            <div>
                <CheckOutSummary 
                ingridiants = {this.state.ingridiants}
                cancel = {this.cancelHandler}
                continue = {this.continueHandler} />
                <Route path={this.props.match.url + '/contact-data'} 
                render = {(props) => (<ContactData ingri = {this.state.ingridiants} price = {this.state.totalPrice} {...props}/>)}/>
            </div>
        );
    }
}

export default CheckOut