import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios';
import './CardValidation.css'
import { cardContext } from '../../../contexts/cardContext';
import { userContext } from '../../../contexts/userContext';

const CardValidation = ({ id, actionType, Show }) => {
    const {user} = useContext(userContext)
    const [cardNb, setCardNb] = useState();
    const [ownerName, setOwnerName] = useState('');
    const [CVV, setCVV] = useState();
    const [ExpDate, setExpDate] = useState('');
    const [Brand, setBrand] = useState('Visa');
    const [hide, showError] = useState(false);
    const { card, setCard } = useContext(cardContext);
    const updatePaymentMethod = () => {
        if (cardNb !== '' && Brand !== '' && ExpDate !== '' && CVV !== '' && ownerName !== '') {
            Axios.put('http://localhost:5000/api/Users/' + id + '/card', {
                "cardNumber": cardNb,
                "brand": Brand,
                "expirationDate": ExpDate,
                "cvv": CVV,
                "name": ownerName,
                "userRefId": id,
                "shopRefId": null
            }).then(function (response) {
                setCard(id);
                console.log(card);
                showError(true);
            }).catch(function (error) { console.log(error); showError(true); });
        } else { showError(false); }
    }

    const addPaymentMethod = () => {
        if (cardNb !== '' && Brand !== '' && ExpDate !== '' && CVV !== '' && ownerName !== '') {
            Axios.post('http://localhost:5000/api/Users/' + id + '/card', {
                "cardNumber": cardNb,
                "brand": Brand,
                "expirationDate": ExpDate,
                "cvv": CVV,
                "name": ownerName,
                "userRefId": id,
                "shopRefId": null
            }).then(function (response) {
                setCard(user);
                console.log(card);
                showError(true);
            }).catch(function (error) { console.log(error); showError(true); });
        } else { showError(false); }
    }

    return (
        <div className='cardContainer'>
           
                <h1>Payment Method</h1>
                <h5>Choose the brand *</h5>
                <select className='brandSelect' value={Brand} onChange={(e) => setBrand(e.target.value)} name="Brand" id="Brand">
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
                    {actionType === 'Add' ? "Add METHOD" : "Update METHOD"}
                </button>
                {!hide && <p className='field_missing_error'> please fill all fields with a * near them </p>}
                {hide && <p className='success'> ur card is added successfully u may proceed with ur order </p>}
            
        </div>
    )
}

export default CardValidation