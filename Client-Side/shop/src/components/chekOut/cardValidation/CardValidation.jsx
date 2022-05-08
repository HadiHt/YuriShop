import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './CardValidation.css'

const CardValidation = ({ id, actionType, Show }) => {
    const [cardNb, setCardNb] = useState();
    const [ownerName, setOwnerName] = useState('');
    const [CVV, setCVV] = useState();
    const [ExpDate, setExpDate] = useState('');
    const [Brand, setBrand] = useState('');
    const updatePaymentMethod = () => {

    }

    const addPaymentMethod = () => {
        Axios.post('http://localhost:5000/api/Users/' + id + '/card', {
            "cardNumber": cardNb,
            "brand": Brand,
            "expirationDate": ExpDate,
            "cvv": CVV,
            "name": ownerName,
            "userRefId": id,
            "shopRefId": null
        }).then(function (response) { console.log(response.data); })
            .catch(function (error) { console.log(error); });
    }

    return (
        <div className='cardContainer'>
            <div>
                <h1>Payment Method</h1>
                <h5>Choose the brand *</h5>
                <select value={Brand} onChange={(e) => setBrand(e.target.value)} name="Brand" id="Brand">
                    <option value="Visa">Visa</option>
                    <option value="Master Card">Master Card</option>
                </select>
                <h5>Owner Name *</h5>
                <input value={ownerName} onChange={(e) => setOwnerName(e.target.value)} type='text' />
                <h5>Card number *</h5>
                <input type='text' value={cardNb} onChange={e => setCardNb(parseInt(e.target.value))} />
                <div className='subContainer'>
                    <div className='hu'>
                        <h5>Exp Date *</h5>
                        <input value={ExpDate} onChange={(e) => setExpDate(e.target.value)} id='ED' type='text' />
                    </div>
                    <div>
                        <h5>CVV *</h5>
                        <input value={CVV} onChange={(e) => setCVV(parseInt(e.target.value))} id='cvv' type='text' />
                    </div>
                </div>
                <button onClick={actionType === 'Add' ? addPaymentMethod : updatePaymentMethod} className='AddCard'>
                    Add Method
                </button>
            </div>
        </div>
    )
}

export default CardValidation