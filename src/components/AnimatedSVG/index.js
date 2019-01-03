import React, { Component } from 'react';
import Vivus from 'vivus';

class AnimatedSVG extends Component {
    
    componentDidMount() {
        new Vivus('animated', {type: 'sync', duration: this.props.duration, file: this.props.svg});
    }
    render() {
        return (
            <div className="hero__image-container" style={{width: this.props.width}} id="animated"></div>
        );
    }
}
  
export default AnimatedSVG;