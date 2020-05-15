import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address:{
            street: '',
            pin: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault()
        console.log(this.props.ingri)
        this.setState({
            loading: true
        })
        const order = {
            ingrediants: this.props.ingri,
            price : this.props.price,
            customer: {
                customerID : 123,
                name: "De Niro",
                street: "Heat 42nd avenue",
            },
            paymentMethod: "COD"
        }

        axios.post('/order.json',order)
                .then(response => {
                    this.setState({
                        loading: false,
                    })
                    this.props.history.push('/')
                })
                    .catch(error => {
                        this.setState({
                            loading: false,
                        })
                    })
    }

    render(){
        let form = (
            <form>
                    <input className={classes.Input} type='text' name='name' placeholder = 'Enter Name'/>
                    <input className={classes.Input} type='text' name='email' placeholder = 'Enter Email'/>
                    <input className={classes.Input} type='text' name='street' placeholder = 'Enter Street'/>
                    <input className={classes.Input} type='text' name='pin' placeholder = 'Enter Pin Code'/>
                    <Button btnType = 'Success' clicked ={this.orderHandler}>Order</Button>
                </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return(
            <div className = {classes.ContactData}>
                <h4>Enter your contact details</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;