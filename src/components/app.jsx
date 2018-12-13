import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import flats from '../../data/flats.js';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats,
      selectedFlat: flats[0]
    }
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return(
      <div>
        <div className="left-div">
          <FlatList selectedFlat={this.state.selectedFlat} flats={this.state.flats} selectFlat={this.selectFlat} />
        </div>
        <div className="right-div">
          <div className="map-container">
            <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
              <Marker price={this.state.selectedFlat.price} priceCurrency={this.state.selectedFlat.priceCurrency} lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
