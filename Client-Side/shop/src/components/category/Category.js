import React from 'react'
import Mouse from '../elements/img1.jpg'
import Speaker from '../elements/img2.jpg'
import Monitor from '../elements/img3.jpg'
import Keybord from '../elements/img4.jpg'
import './Category.css'

const Category = () => {
    return (
        <div className='envelope'>
            <div className='responsive'>
                <div className='category'>
                    <img className='image-preview' src={Mouse}></img>
                    <img className='image-preview' src={Keybord}></img>
                    <img className='image-preview' src={Speaker}></img>
                    <img className='image-preview' src={Monitor}></img>
                </div>
            </div>
            <div className='responsive'>
                <div className='category'>
                    <img className='image-preview' src={Mouse}></img>
                    <img className='image-preview' src={Keybord}></img>
                    <img className='image-preview' src={Speaker}></img>
                    <img className='image-preview' src={Monitor}></img>
                </div>
            </div>
            <div className='responsive'>
                <div className='category'>
                    <img className='image-preview' src={Mouse}></img>
                    <img className='image-preview' src={Keybord}></img>
                    <img className='image-preview' src={Speaker}></img>
                    <img className='image-preview' src={Monitor}></img>
                </div>
            </div>
            <div className='responsive'>
                <div className='category'>
                    <img className='image-preview' src={Mouse}></img>
                    <img className='image-preview' src={Keybord}></img>
                    <img className='image-preview' src={Speaker}></img>
                    <img className='image-preview' src={Monitor}></img>
                </div>
            </div>
            <div className='responsive'>
                <div className='category'>
                    <img className='image-preview' src={Mouse}></img>
                    <img className='image-preview' src={Keybord}></img>
                    <img className='image-preview' src={Speaker}></img>
                    <img className='image-preview' src={Monitor}></img>
                </div>
            </div>
        </div>
    )
}

export default Category