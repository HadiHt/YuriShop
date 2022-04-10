import React from 'react'
import './Modal.css'

const Modal = () => {
  return (
    <div className='modal'>
      <div classNamw='modal-content'>
        <div className='modal-header'>
          <div className='modal-title'>
            <h1>test</h1>
          </div>
        </div>
        <div className='modal-body'>
          <h1>test</h1>
        </div>
        <div class='modal-footer'>
          <button>close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal