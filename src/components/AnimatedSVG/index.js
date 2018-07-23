import React, { Component } from 'react';
import Vivus from 'vivus';

class AnimatedSVG extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        new Vivus('animated', {duration: 180, file: this.props.svg});
    }
    render() {
        return (
            <div style={{'width': this.props.width}} id="animated"></div>
        );
    }
}
  
export default AnimatedSVG;