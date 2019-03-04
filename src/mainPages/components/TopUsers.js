import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';

class Gallery extends React.Component {

    galleryItem = (item, i) => (
    <div key={`key-${i}`} className="yours-custom-class"><h2>{item}</h2></div>
);
    items = [1, 2, 3, 4, 5];
    state = {
        currentIndex: 0,
        responsive: { 1024: { items: 3 } },
        items: this.items.map(this.galleryItem)
    };

    slideTo = (i) => this.setState({ currentIndex: i });

    onSlideChanged = (e) => this.setState({ currentIndex: e.item });

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

    thumbItem = (item, i) => (
    <li key={`key-${i}`} onClick={() => this.slideTo(i)}>Thumb {item}</li>
);

render() {
    const { items, responsive, currentIndex } = this.state
    return (
        <div className="justify-content-betweend-flex justify-content-between">
            <div className="p-2">
        <button onClick={() => this.slidePrev()}>Prev button</button>
        </div>
            <div className="p-2">
    <AliceCarousel
items={items}
dotsDisabled={true}
buttonsDisabled={true}
responsive={responsive}
slideToIndex={currentIndex}
onSlideChanged={this.onSlideChanged}
    />
    </div>
            <div className="p-2">
    <button onClick={() => this.slideNext()}>Next button</button>
    </div>
    </div>
);
}
}

export default Gallery;