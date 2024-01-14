
function Square({value, onClick, winner}: {
    value: 'X' | 'O' | null,
    onClick: ()=> void,
    winner: 'X' | 'O' | null | 'BOTH'
}) {
    const bg = (value==="X")? "bg-pink-300/50":"bg-sky-300/50"

        if (!value){
            return <button className="transition ease-in-out duration-100 bg-green-300/80 rounded-md py-3 shadow-md active:text-sky-500 min-h-36 scale-100 hover:scale-y-110 hover:outline-dashed outline-1" onClick={onClick} disabled={Boolean(winner)}></button>
        }
        else{
            return <button className={`${bg} min-h-36 rounded-md py-3 `} disabled>{value}</button>;
        }
}

export default Square
