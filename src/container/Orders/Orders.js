import React,{Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandling/withErrorHandling';

class Orders extends Component{
    state = {
        orders : [],
        loading: true
    }

    componentDidMount(){
        axios.get('/order.json')
            .then(res => {
                let fetchedData = []
                for(let key in res.data){
                    fetchedData.push({
                        ...res.data[key],
                        id: key
                    })
                }
                console.log(fetchedData)
                this.setState({loading:false, orders: fetchedData})
            }).catch(err => {
                this.setState({loading:false})
            })
            
        }      
    render(){
        return(
            <div>
                {this.state.orders.map(order => (
                    <Order key = {order.id} ingri = {order.ingrediants} price = {+order.price} />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);