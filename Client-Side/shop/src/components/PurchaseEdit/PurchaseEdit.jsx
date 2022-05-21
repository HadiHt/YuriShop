import React, { useEffect, useState } from 'react'
import './PurchaseEdit.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Edit } from '@material-ui/icons';

const PurchaseEdit = () => {
    const [user, setUser] = useState([]);
    const [add, setAdd] = useState([]);
    const params = useParams();
    useEffect(() => {
        axios.get('http://localhost:5000/api/Orders/' + params.orderId)
            .then(res => {
                //   console.log(res.data);
                const i = res.data.userRefId;
                // setImgData(res.data);
                axios.get('http://localhost:5000/api/Users/' + i)
                    .then(res => {
                        //     console.log(res.data);
                        setUser(res.data);
                        axios.get('http://localhost:5000/api/Users/' + i + '/address')
                            .then(res => {
                                console.log(res.data);
                                setAdd(res.data);
                            }).catch(err => console.log(err))
                    }).catch(err => console.log(err))
            }).catch(err => console.log(err))
    }, []);
    return (
        <div className='AddProductInfoContainer'>
            <span className='ProductInfoContainer'>
                <div className='InfoRow'>
                    <div className='ProductInfo'>
                        <h4>Name of customer</h4>
                        <p>{user.firstName} {user.lastName}</p>
                    </div>
                </div>
                <div className='InfoRow'>
                    <div className='ProductInfo'>
                        <h4>Street</h4>
                        <p>{add.street}</p>
                    </div>
                    <div className='ProductInfo'>
                        <h4>area</h4>
                        <p>{add.area}</p>
                    </div>
                </div>
                <div className='InfoRow'>
                    <div className='ProductInfo'>
                        <h4>state/city</h4>
                        <p>{add.state}/{add.city}</p>
                    </div>
                    <div className='ProductInfo'>
                        <h4>building</h4>
                        <p>1</p>
                    </div>
                </div>
                <div className='InfoRow'>
                    <div className='ProductInfo'>
                        <h4>Product State</h4>
                        <select className='ProductInfo'>
                            <option value='Art'>pending</option>
                            <option value='Books'>on Way</option>
                            <option value='Clothing'>delevired</option>
                        </select>
                    </div>
                </div>
            </span>
            <button className='AddProductButton'>Change state</button>
        </div>
    )
}

export default PurchaseEdit