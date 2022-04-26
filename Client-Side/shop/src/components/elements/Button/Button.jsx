import React from 'react'
import './Button.css'

const Button = ({text,style, url, icon, func}) => {
  return (
    <a className='icon' href={url}>
      <button className={style} onClick={func}><i className={icon}></i>{text}</button>
    </a>
  )
}

export default Button