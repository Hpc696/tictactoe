import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faO, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'
import Calcolovincitore from "../vincitore.js"
import Casella from './caselle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


export default function Board () {
  const [squares, setSquares] = React.useState(Array(9).fill(0));
  const [isX, setIsX] = React.useState(true);
  const [cont, setcont] = React.useState(0);
  const increm = () => {
    setcont(cont => cont+1);
    return
  }
//'stampa' valore di isx quando subisce variazioni 
  useEffect(()=>{
  console.log("test isx", isX)
}, [isX])

  const Click = (i) => {
    if (Calcolovincitore(squares) || squares[i]) {
      return
    }
    squares[i] = isX ? 1 : 2 ;
    setSquares(squares)
    setIsX(!isX)
    increm();
  }
  //stampa ora a ogni click 'test'
console.log("ora")
  function Turnodi(){
  const vincitore = Calcolovincitore(squares)
  let stato=0;
  if (vincitore===1) {
    stato = <span className='h-auto w-auto d-table m-auto'> VINCITORE: <div className='d-flex justify-content-center m-4'>   
    <FontAwesomeIcon className='m-1 fa-2x' color='#0d6efd' icon={faXmark}/>
    </div></span>
  } else if (vincitore===2) {
    stato = <span className='h-auto w-auto d-table m-auto'> VINCITORE: <div className='d-flex justify-content-center m-4'> 
    <FontAwesomeIcon className='m-1 fa-2x' color='#0d6efd' icon={faO}/>
    </div></span>
  } else if (cont===9){
    stato = <span className='h-auto w-auto d-table m-auto'> PAREGGIO </span>
  } else {
    stato = <span className='h-auto w-auto d-table m-auto'>TOCCA A: <div className='d-flex justify-content-center m-4'>  
    <FontAwesomeIcon className='m-1 fa-2x' color='#0d6efd' icon={isX ? faXmark : faO}/> 
    </div></span>
  }
  
  return (
    stato
  )
}
  
  const Restart = () => {
    setIsX(true)
    setSquares(Array(9).fill(0))
    setcont(0);
  }
 
   let lista = []
   for(let row=0; row<3; row++){
     let rowEL= (<tr key={row} className='row-board'>
       {[0,1,2].map((col) => <Casella key={row*3+col} stato={squares[row*3+col]} onClick={() => Click(row*3+col)} /> )}
     </tr>)
     lista.push(rowEL)
   }

  /*let griglia = [0,1,2].map((row) => 
        (
          <div key={row} className='row-board'>
            {[0,1,2].map((col) => <Casella key={row*3+col} stato={squares[row*3+col]} onClick={() => Click(row*3+col)} /> )}
          </div>
        ))
    
  ;
  */
  return (
    <>
    <table className="board m-auto">
      <tbody>
      
        {lista}
      
        </tbody>
        </table>
    <div className="stato position-relative fs-2 fw-bold m-5">{Turnodi()}</div>
    <div className='text-center'>
    <button className="restart btn btn-primary btn-lg " onClick={Restart}> RIGIOCA </button>
    </div>
    </>
  )
}