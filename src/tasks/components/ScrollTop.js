import React from "react";

class ScrollTop extends React.Component {
    render() {
        return (
            <p class="scrolltop smooth">
                <a className="scroll-top-col" href="tasks/#"><span><i class="fa fa-arrow-up"></i></span>Up</a>
            </p>
        );
    }
}

export default ScrollTop;

