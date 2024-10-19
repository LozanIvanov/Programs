
import React from "react";

export default function conditonalRendering(){

function Item({ name, isPacked }) {
    return (
      <li className="item">
     {name}   {!isPacked ?  <span style={{fontSize: '20px',
              fontWeight: 'bold',
              color: 'red',          
              textShadow: 
                 ' -1px -1px 0 #000 ,1px -1px 0 #000, -1px 1px 0 #000,  1px 1px 0 #000'}}>X</span> :  '✅'}
      </li>
    );
  }
  
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  