import React from 'react'
import './Modal.css'
import PropTypes from 'prop-types';

const SearchBarModal = ({Data, input=''}) => {
  
  if(input.length >0){
    Data= Data.filter((data)=>{
      return data.name.match(input)
    })
    console.log(Data);
  }

  const arr = Data.map((data, index) => {
    return (
      <div key={index} className='search-result'>
        <p>{data.name}
          <strong>{data.price}</strong>
          <small>K L.L</small>
        </p>
      </div>
    )
  });
  return (
      <div className='searchBarModal'>
        <div className='modal-content'>
          <div className='modal-body'>
            {arr}
          </div>
        </div>
      </div>
  )
}

SearchBarModal.propTypes = {
  input: PropTypes.string
};
export default SearchBarModal