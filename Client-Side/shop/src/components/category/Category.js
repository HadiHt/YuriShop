import React from 'react'
import Mouse from '../elements/Mouse.jpg'
import Speaker from '../elements/Speaker.jpg'
import Monitor from '../elements/Monitor.jpg'
import Keybord from '../elements/Keybord.jpg'
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