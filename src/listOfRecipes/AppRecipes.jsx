import React from 'react';
import { recipes } from './data.jsx';

const Menu=()=>recipes.map((x)=>{
  return(
    <div key={x.id}>
    <h2>{x.name}</h2>
    <ul>
     { x.ingredients.map((y,index)=>
      <li key={x.id + '_' + index}>
        {y}
      </li>)}
      </ul>
      </div>
    
  )
})

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <Menu/>
      
    </div>
  );
}
