import React, { useState,useEffect } from 'react'
import CardValidation from './cardValidation/CardValidation'

const ActionButton = ({ id,Data }) => {
    const [ actionType, setActionType] = useState('');
    const [ show, setShow] = useState(false);
    useEffect(() => {
        if(Data ==''){
            setActionType('Add')
        }else{
            setActionType('Update')
        }
    }, []);
    const showForm = () => {
        setShow(!show);
    }
    return (
        <div>
            <button onClick={showForm} className='Buttonn' >{Data !== '' ? 'Update your payment Method' : 'Addur payment method'}</button>
            {show && <CardValidation id={id} Show={show} actionType={actionType}/>}
        </div>
    )
}

export default ActionButton