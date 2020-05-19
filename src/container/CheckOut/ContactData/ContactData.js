import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component{
    state = {
        orderForm:{
            name:{
                elementTyp: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value:''
            },
            street:{
                elementTyp: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value:''
            },
            zipcode:{
                elementTyp: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value:''
            },
            email:{
                elementTyp: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value:''
            },
            deliveryMethod:{
                elementTyp: 'select',
                elementConfig: {
                    options:[
                        {value:'fastest',displayValue:'Fastest'},
                        {value:'cheapest', displayValue:'Cheapest'}
                    ]
                },
                value:'fastest'
            }
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault()
        console.log(this.props.ingri)
        this.setState({
            loading: true
        })
        const formData = {}
        for(let key in this.state.orderForm){
            formData[key] = this.state.orderForm[key].value
        }
        const order = {
            ingrediants: this.props.ingri,
            price : this.props.price,
            orderData : formData
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

    changeHandler = (event, inputId) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormEle = {
            ...updatedOrderForm[inputId]
        }
        updatedFormEle.value = event.target.value;
        updatedOrderForm[inputId] = updatedFormEle;
        this.setState({
            orderForm : updatedOrderForm
        }) 
    }

    render(){
        let formElement = []
        for(let key in this.state.orderForm){
            formElement.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit = {this.orderHandler}>
                    {formElement.map(ele => (
                        <Input 
                        key = {ele.id}
                        elementTyp = {ele.config.elementTyp} 
                        elementConfig = {ele.config.elementConfig} 
                        value = {ele.config.value} 
                        changed = {(event) => this.changeHandler(event,ele.id)}/>
                    ))}
                    <Button btnType = 'Success'>Order</Button>
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