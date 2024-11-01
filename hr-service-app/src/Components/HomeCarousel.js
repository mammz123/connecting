import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from '../vedio/ad1.png'
import logos from '../vedio/man-introducing-himself-employers-office-job-interview.jpg'
import logose from '../vedio/aerial-view-dubai-city-from-top-tower.jpg'


const HomeCarousel = () => {
  return (
    <div style={{ width: '100%' }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo}
            alt="First slide"
            style={{ height: '450px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logos}
            alt="Second slide"
            style={{ height: '450px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logose}
            alt="Third slide"
            style={{ height: '450px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;