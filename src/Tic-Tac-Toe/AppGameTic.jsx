import React, { useState } from "react";

export default function TicTocToe() {

    const [square, setSquere] = useState(Array(9).fill(null));
    const [xIsNext, setxIsNext] = useState(true);
    const winner = calculateWinner(square);

    const handleClick = (i) => {
        if (square[i] || winner) {
            return;
        }
        const nextSquare = square.slice();
        nextSquare[i] = xIsNext ? "X" : "0";
        setxIsNext(!xIsNext)
        setSquere(nextSquare);
    }

    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",height:"100vh"}}>
            <div style={{ width: "180px", display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: "wrap", rowGap: "5px" }} >
                {square.map((x, index) => (
                    <div style={{ width: "33%" }}>
                        <button
                            onClick={() => handleClick(index)}
                            style={{ width: "50px", height: "50px", borderRadius: "50%", padding: "5px", border: "1px solid black", fontSize: "25px" }}
                        >{x}</button>
                    </div>
                ))}

            </div>
            <div style={{display:"flex",marginTop:"10px"}}>
                {winner
                    ? `Winner: ${winner}` 
                    : `Next player: ${xIsNext ? 'ivan' : 'petar'}`} 
            </div>
        </div>)

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6], 
        ];

    
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                
                return square[a]==="X" ? "Ivan" :"Petar"; 
            }
        }
        return null; 
    }

}