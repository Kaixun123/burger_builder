import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey} />;
        } );
    } ).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (transformIngredients.length === 0){
        transformIngredients = <p>Please start adding ingredients!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};

export default burger