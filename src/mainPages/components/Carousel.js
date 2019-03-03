import React from 'react';
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
                alt="First slide"/>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                        src={require('../../img/Carousel/CarouselImg2.jpeg')}
                    alt="Third slide"/>

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100 img-fluid"
                        src={require('../../img/Carousel/CarouselImg3.jpeg')}
                alt="Third slide"/>

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
                </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                        src={require('../../img/Carousel/CarouselImg4.jpeg')}
                    alt="Third slide" />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

    );
}
}


export default ControlledCarousel;