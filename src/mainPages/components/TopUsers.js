import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestTop } from '../actions';
import '../topUsers.css';
//

//
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    items = [1, 2, 3, 4, 5]

    state = {
      currentIndex: 0,
      responsive: { 1024: { items: 3 } },
      galleryItems: this.galleryItems()
    }
   
    slideTo = (i) => this.setState({ currentIndex: i })
   
    onSlideChanged = (e) => this.setState({ currentIndex: e.item })
   
    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
   
    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
   

   
    galleryItems() {
      return this.props.users.map((i) => 
      <li key={i.id}>
        <h5>Name:{i.name}</h5> 
        <h5>Surname:{i.sur_Name} </h5>
        <h5>Rating: 10</h5>
      </li>)
    }
   
    render() {
      const { galleryItems, responsive, currentIndex } = this.state
      return (
        <div>
            <button onClick={() => this.slidePrev()}>Previous</button>
          <AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            items={this.state.galleryItems}
            responsive={responsive}
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
          />
          
          <button onClick={() => this.slideNext()}>Next</button>
        </div>
      )
    }
 

};
 


export default connect(
    state => state.topUsers, null
)(Gallery);