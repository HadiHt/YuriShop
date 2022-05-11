import React, { useContext, useState, useEffect } from 'react'
import OrderCard from '../../components/oderCard/OrderCard'
import Axios from 'axios'
import './Order.css'
import OrderViewTemplate from '../../components/OrderViewTemplate/OrderViewTemplate'
import { userContext } from '../../contexts/userContext'

const Order = () => {
    const { user } = useContext(userContext);
    const [Data, setDataa] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/Orders/' + user.userId + '/user')
            .then(res => {
                console.log(res.data[1].timeCreated);
                let unique = [...new Map(res.data.map((item) => [item["timeCreated"], item])).values(),];
                console.log(unique)

                setDataa(unique)
                //s    console.log(unique)

            }).catch(err => console.log(err))
    }, [])
    console.log(Data)
    const arr = Data.map((data, index) => {
        return (
            <div key={index}>
                <OrderCard order={data}
                />
            </div>
        )
    });

    return (
        <div className='OrderPageContainer'>
            <div className="OrdersContainer">
                {arr}
            </div>
            <div className="OrderPreview">
                <div className='orderPreviewContent'>
                    <OrderViewTemplate/>
                </div>
            </div>
        </div>
    )
}

export default Order