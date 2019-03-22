import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestTop } from '../actions';
import '../topUsers.css';
//
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount(){
        requestTop();
        
    }
    render(){
          return(
            <div className=" top-users d-flex flex-row justify-content-center">
             {this.props.users.map(item =>(
                <li className="top-users-item">
                <h4>Top position : {item.id}</h4>
                <h5>Name:{item.name}</h5> 
                <h5>Surname:{item.sur_Name} </h5>
                <h5>Rating:</h5>
                </li>
              ))}
              </div>
          )}};
        // return(
        //     <Carousel
        //         partialVisbile = {true}
        //         disableSwipeOnMobile
        //         disableDrag = {true}
        //         shouldShowDots={false}
        //         responsive={responsive}
        //         forSSR
        //         slidesToSlide={3}
        //         infinite={true}
        //         autoPlay={this.props.deviceType !== 'mobile' ? true : false}
        //         autoPlaySpeed={5000}
        //         keyBoardControl={false}
        //         customTransition='all .5'
        //         transitionDuration={500}
        //         containerClassName='container-border-green'
        //         removeArrowOnDeviceType={['tablet', 'mobile']}
        //         deviceType={this.props.deviceType}
        //         dotListClassName='custom-dot-list-style'
        //         itemClassName='carousel-item-gutter-padding-left-40'
        //         containerClassName='carousel-container-padding-bottom-80'>          
        //             {this.props.users.map(item =>(
        //             <div>
        //             <h3>Top position : {item.id}</h3>
        //             <h5>Name:{item.name}</h5> 
        //             <h5>Surname:{item.sur_Name} </h5>
        //             <h5>Rating:</h5>
        //             </div>
        //         ))}
        //          </Carousel>
        // )

    
    // render(){
    //     return(
    //         <div>
    //         {this.props.users.map(item =>(
    //             <li>
    //             <h3>Top position : {item.id}</h3>
    //             <h5>Name:{item.name}</h5> 
    //             <h5>Surname:{item.sur_Name} </h5>
    //             <h5>Rating:</h5>
    //             </li>
    //           ))}
    //           </div>
    //     )};
    //  galleryItem = (item => (
    //     <li>
    //     <h3>Top position : {item.id}</h3>
    //     <h5>Name:{item.name}</h5> 
    //     <h5>Surname:{item.sur_Name} </h5>
    //     <h5>Rating:</h5>
    //     </li>
    // ));
    // items = users.leghth;
    // state = {
    //     currentIndex: 0,
    //     responsive: { 1024: { items: 3 } },
    //     items: this.props.users.map(this.galleryItem)
    // };

    // slideTo = (i) => this.setState({ currentIndex: i });

    // onSlideChanged = (e) => this.setState({ currentIndex: e.item });

    // slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    // slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

    // thumbItem = (item, i) => (
    //     <li key={`key-${i}`} onClick={() => this.slideTo(i)}>Thumb {item}</li>
    // );

    // render() {
    //     const { items, responsive, currentIndex } = this.state;
    //     return (
    //         <div className="justify-content-betweend-flex justify-content-between">
    //             <h2 className="text-center">Browse our highest-rated mobile engineers & designers</h2>
    //             <div className="p-2">
    //                 <button onClick={() => this.slidePrev()}>Prev Freelancers</button>
    //             </div>
    //             <div className="p-2">
    //                 <AliceCarousel
    //                     items={items}
    //                     dotsDisabled={true}
    //                     buttonsDisabled={true}
    //                     responsive={responsive}
    //                     slideToIndex={currentIndex}
    //                     onSlideChanged={this.onSlideChanged}
    //                 />
    //             </div>
    //             <div className="p-2">
    //                 <button onClick={() => this.slideNext()}>Next Freelancers</button>
    //             </div>
    //         </div>
    //     );
    // }



export default connect(
    state => state.topUsers,
    dispatch => bindActionCreators(requestTop, dispatch)
)(Gallery);