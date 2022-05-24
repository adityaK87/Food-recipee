import React from 'react'; 
import './RecipeTile.css';

export default function RecipeTile({recipe}){
    return(
        // recipe?.recipe?.image.match(/\.(jpeg|jpg|gif|png)$/) 
        // == null && ( )
        <div className='recipeTile'>
        <img className='image' src={recipe["recipe"]["image"]} alt="error to load img" />
        <p className='label'>{recipe["recipe"]["label"]}</p>

        </div>
        )
    
}