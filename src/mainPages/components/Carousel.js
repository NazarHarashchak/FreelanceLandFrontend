import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

class ControlledCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={require('../../img/Carousel/CarouselImg1.jpg')}
                        alt="First slide" />
                    <Carousel.Caption>
                        
                        <p>Create a work space yourself.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={require('../../img/Carousel/CarouselImg2.jpeg')}
                        alt="Third slide" />

                    <Carousel.Caption>
                        
                        <p>Work in comfort.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={require('../../img/Carousel/CarouselImg3.jpeg')}
                        alt="Third slide" />

                    <Carousel.Caption>
                        
                        <p>Earn some money during the trip.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={require('../../img/Carousel/CarouselImg4.jpeg')}
                        alt="Third slide" />

                    <Carousel.Caption>
                        
                        <p>Get successfully from work.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        );
    }
}


export default ControlledCarousel;