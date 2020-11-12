import React from 'react';
import Style from './recipe.module.css'

const Recipes = ({title, Calories, image, ingredients}) => {
    return (
        <div className={Style.recipe}>
            <h1>{title}</h1>
            <p>Calories - {Calories}</p>
            <img src={image} alt={title}/>
            <ol>
                <li>Ingredients :</li>
                {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
        </div>
    )
}

export default Recipes;
