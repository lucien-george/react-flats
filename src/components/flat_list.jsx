import React, { Component } from 'react';
import Flat from './flat.jsx';

class FlatList extends Component {
  render() {
    return(
      <div className="flat-list">
        {this.props.flats.map((flat, index) => <Flat selected={flat.name === this.props.selectedFlat.name} index={index} key={flat.id} name={flat.name} price={flat.price} priceCurrency={flat.priceCurrency} imageUrl={flat.imageUrl} selectFlat={this.props.selectFlat}/>)}
      </div>
    );
  }
}

export default FlatList;
