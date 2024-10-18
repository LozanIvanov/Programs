import React from "react";

export default function SearchBox({ inStockOnly, onInStockOnlyChange,filterText,onFilterTextChange }) {

    return (
        <div >
            <form>
                <input 
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={(e)=>onFilterTextChange(e.target.value)}
                />
                <label >
                    <input type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => onInStockOnlyChange(e.target.checked)}>
                    </input>
                    Instock </label>
            </form>
        </div>
    )
}