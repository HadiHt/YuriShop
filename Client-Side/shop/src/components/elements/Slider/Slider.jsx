import React, { useState , useEffect} from 'react'
import './Slider.css'
import SlideClick from './SlideClick';
import Axios from 'axios';

const Slider = () => {
  const [Data, setData] = useState([]);
  const [images, setimg] = useState('');
    useEffect(() => {
        Axios.get('http://localhost:5000/api/Products/Category/electronics')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            }).catch(err => console.log(err))
    }, [])
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== Data.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === Data.length) {
      setSlideIndex(1)
    }
    setimg(Data[slideIndex-1].image);
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(Data.length)
    }
    setimg(Data[slideIndex-1].image);
  }

  const moveDot = index => {
    setimg(Data[slideIndex-1].image);
  }

  return (
    <div className='slider-container'>
      <div className="picContainer">
        <SlideClick direction="prev" moveSlide={prevSlide} />
            <div id='sliding'
              className={slideIndex === slideIndex + 1 ? "slide active-anim" : "slide"}
            >
              <img 
              src={'data:image/png;base64,'+images}
              />
            </div>
        <SlideClick direction="next" moveSlide={nextSlide} />
      </div>
      <div className="container-dots">
          {Array.from({ length: 4 }).map((item, index) => (
            <div key={index}
              onClick={() => moveDot(index+1)}
              className={slideIndex === index+1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
    </div>
  );
}

export default Slider
