import React from "react";

class ScrollTop extends React.Component {
    render() {
        return (
            <p className="scrolltop smooth">
                <a className="scroll-top-col" onClick={this.props.scrollFunc}><span><i className="fa fa-arrow-up"></i></span>Up</a>
            </p>
        );
    }
}

export default ScrollTop;

