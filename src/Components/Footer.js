import React from 'react'

export default function Footer(props) {
  return (
    <div className='row fixed-bottom'>
      <div className='col-2 btn btn-danger' type='button' onClick={() => {props.ResetData()}}>Reset</div>
      <div className='col-8 bg-dark text-white text-center'>{props.totalAmount}</div>
      <div className='col-2 btn btn-primary ' type='button'>Pay Now</div>
    </div>
  )
}
