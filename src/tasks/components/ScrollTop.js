import React from "react";
import PropTypes from 'prop-types';

class ScrollTop extends React.Component {
    static propTypes = {
        scrollFunc:PropTypes.func.isRequired
    }

    render() {
        return (
            <p className="scrolltop smooth">
                <a className="scroll-top-col" onClick={this.props.scrollFunc}><span><i className="fa fa-arrow-up"></i></span>Up</a>
            </p>
        );
    }
}

export default ScrollTop;

