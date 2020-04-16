import React,{Component} from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    menuClickedHandler = () => {
        //due to asynchronus behaviour of the set state use the function format
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render(){
        return (
            <Aux>
                <Toolbar clicked = {this.menuClickedHandler}/>
                <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler}/>
                <main className = {classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
} 
export default Layout;