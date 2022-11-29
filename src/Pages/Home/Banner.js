import React from 'react';
import Slider from 'react-slick';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpeg';
import banner3 from '../../images/banner/banner3.jpg';
import banner4 from '../../images/banner/banner4.jpg';
import banner5 from '../../images/banner/banner5.webp';
const Banner = () => {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 1,
      speed: 500
    };
    return (
        <div className='mx-auto'>
        <Slider {...settings}>
          <div>
            <img src={banner1} alt="" className='w-screen h-[600px]'></img>
          </div>
          <div>
          <img src={banner2} alt="" className='w-screen h-[600px]'></img>
          </div>
          <div>
          <img src={banner3} alt="" className='w-screen h-[600px]'></img>
          </div>
          <div>
          <img src={banner4} alt="" className='w-screen h-[600px]'></img>
          </div>
          <div>
          <img src={banner5} alt="" className='w-screen h-[600px]'></img>
          </div>
          
        </Slider>
      </div>
    );
};

export default Banner;