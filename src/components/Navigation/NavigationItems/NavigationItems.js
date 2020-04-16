import React from 'react';
import classes from './Navigationitems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    
        <ul className= {classes.NavigationItems}>
            <NavigationItem link = '/' active>Burger Builder</NavigationItem>
            <NavigationItem link ='/' >Check Out</NavigationItem>
        </ul>
    

);

export default navigationItems;