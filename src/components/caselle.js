import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faO } from '@fortawesome/free-solid-svg-icons';
export default function Casella({ onClick, stato}) {
    if(stato===0){
      stato=<span> </span>;
    }else if(stato===1){
      stato= <div className='d-flex justify-content-center m-4'> <FontAwesomeIcon className='fa-3x' color='white' icon={faXmark}/> </div>
    }else{
      stato= <div className='d-flex justify-content-center m-4'> <FontAwesomeIcon className='fa-3x' color='white' icon={faO}/> </div>
    }
    return (
      <td className="square bg-primary" onClick={onClick}>
      {stato}
      </td>
    );
}