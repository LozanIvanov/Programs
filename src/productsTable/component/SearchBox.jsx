import React from "react";

export default function SearchBox({inStockOnly, onInStockOnlyChange}){

    return(
        <div >
             <label > 
             <input type="checkbox"
             checked={inStockOnly}
              onChange={(e)=>onInStockOnlyChange(e.target.checked)}>
             </input> 
             Instock </label>
        </div>
    )
}