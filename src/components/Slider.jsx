import React from 'react'
import { Carousel, Container } from 'react-bootstrap'

const Slider = () => {
    return (
        <Container className='p-5'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://dummyjson.com/image/i/products/1/1.jpg'
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://dummyjson.com/image/i/products/6/1.png'
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://dummyjson.com/image/i/products/9/1.jpg'
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container >
    )
}

export default Slider