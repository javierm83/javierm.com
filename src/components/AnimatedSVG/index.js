import React, { Component } from 'react';
import Vivus from 'vivus';

class AnimatedSVG extends Component {
    
    componentDidMount() {
        new Vivus('animated', {type: 'sync', duration: this.props.duration, file: this.props.svg});
    }
    render() {
        return (
            <div style={{width: this.props.width, margin: '0 auto'}} id="animated"></div>
        );
    }
}
  
export default AnimatedSVG;