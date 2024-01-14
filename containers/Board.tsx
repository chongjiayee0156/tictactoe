import Square from "@/components/Square";
import { useEffect, useState } from "react";

function calculateWinner(squares: Array<'X'|'O'|null>){
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

      for (let i=0;i<lines.length;i++){
            const [a,b,c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a]
            }
            else{
                return null
            }
      }
}

function Board(){
    const [squares, setSquares] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null));


    const isEven = new Date().getSeconds() % 2 === 0;

    const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
        isEven ? "X" : "O"
      );
    const [winner, setWinner] = useState<'X'|'O'|null|"BOTH">(null)

    function setSquareValue(index: number){
        const newSquares = squares.map((square, i)=>{
            if (i===index){
                return currentPlayer;
            }
            return square;
        })

        setSquares(newSquares);
        setCurrentPlayer(currentPlayer==="X"?"O":"X")
    }

    function reset(){
        setSquares(Array(9).fill(null))
        const isEven = new Date().getSeconds() % 2 === 0;
        setCurrentPlayer(isEven ? "X" : "O")
        setWinner(null)
    }

    useEffect(()=>{
        const win = calculateWinner(squares)
        if (win){
            setWinner(win);
        }

        if (!win && squares.filter((val)=> Boolean(val)).length === 9){
            setWinner("BOTH")
        }
    })

    return (
        <div>
            {!winner && <p className="p-6 text-center text-2xl font-bold text-sky-900">
            Hey {currentPlayer}, it's ur turn
            </p>}
            {winner && winner!=="BOTH" && <p className="p-6 text-center text-2xl font-bold text-sky-900">CONGRATS {winner}</p>}
            {winner && winner === "BOTH" && <p className="p-6 text-center text-2xl font-bold text-sky-900">It's a tie</p>}

            
            
            <div className="grid grid-cols-3 gap-5 px-10 pt-3">
            {Array(9).fill(null).map((_,i)=>{
                return(
                    <Square 
                    winner={winner}
                    onClick={()=> setSquareValue(i)}
                    value={squares[i]}
                    key={i}/>
                )
            })}
            </div>
            <div className="flex justify-stretch mt-8 ">
            <button onClick={()=>reset()} className="w-full bg-slate-500/30 hover:bg-white hover:text-slate-100 shadow-md active:bg-black/30 active:text-black">RESET</button>
            </div>
        </div>
    )
}

export default Board;