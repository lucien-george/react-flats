import React, { Component } from 'react';

class Marker extends Component {
  render() {
    return(
      <div className='marker'>
        <p>{this.props.price} {this.props.priceCurrency}</p>
      </div>
    );
  }
}

// const Marker = () => <div className="marker">&nbsp;</div>;

export default Marker;
