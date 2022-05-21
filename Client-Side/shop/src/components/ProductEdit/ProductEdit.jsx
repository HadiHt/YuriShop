import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './ProductEdit.css'
import Axios from 'axios';

const ProductEdit = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Art');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [Quantity, setQuantity] = useState(0);
    const [show, setShow] = useState(false);
    const [price, setPrice] = useState(0.0);

    console.log(params.id)

    const Add = () => {
        if (name !== '' && category!=='' && color!=='' && size!=='' && price!==0 && Quantity!==0) {
            Axios.put('http://localhost:5000/api/Products/'+params.id+'/product', {
                "name": name,
                "category": category,
                "color": color,
                "size": size,
                "price": parseFloat(price),
                "quantity": Quantity
            }).then(function (response) {
               console.log('edited');
            })
                .catch(function (error) { console.log(error); });
        }else{setShow(true)}
    }

    return (
        <div className='AddProductInfoContainer'>
            <span className='ProductInfoContainer'>
                <div className='InfoRow'>
                    <div className='ProductInfo'>
                        <p>Name</p>
                        <input value={name} onChange={e => setName(e.target.value)} type='text'></input>
                    </div>
                    <div className='ProductInfo'>
                        <p>Category</p>
                        <select onChange={e => setCategory(e.target.value)} className='ProductInfo'>
                            <option value='Art'>Art</option>
                            <option value='Books'>Books</option>
                            <option value='Clothing'>Clothing</option>
                            <option value='electronics'>electronics</option>
                            <option value='Furniture'>Furniture</option>
                        </select>
                    </div>
                </div>
                <div className='InfoRow'>
                    <div className='ProductInfo'>
                        <p>color</p>
                        <input value={color} onChange={e => setColor(e.target.value)} type='text'></input>
                    </div>
                    <div className='ProductInfo'>
                        <p>Quantity</p>
                        <input value={Quantity} onChange={e => setQuantity(parseInt(e.target.value))} type="number" name="quantity" min={0} max={100} />
                    </div>
                </div>
                <div className='InfoRow'>
                    <div className='ProductInfo'>
                        <p>size</p>
                        <input value={size} onChange={e => setSize(e.target.value)} type='text'></input>
                    </div>
                    <div className='ProductInfo'>
                        <p>price {"(in K L.L)"}</p>
                        <input value={price} onChange={e => setPrice(e.target.value)} type="text" name="quantity" min={0} />
                    </div>
                </div>
            </span>
            <button onClick={Add} className='AddProductButton'>Edit your Product</button>
            {show && <p className='error_message'>please fill all the required fields</p>}
        </div>
    )
}

export default ProductEdit