import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import {   addFeature, removeFeature } from './actions'


const App = ({ state, addFeature, removeFeature  }) => {


  const removeItem = item => {
    // dispatch an action here to remove an item
    removeFeature(item);
  };
  console.log( removeFeature);
  const buyItem = item => {
    // dipsatch an action here to add an item
    addFeature(item);
  };

  return (
    <div className="boxes">
    <div className="box">
      <Header car={state.car} />
      <AddedFeatures car={state.car} removeItem={removeItem} />
    </div>
    <div className="box">
      <AdditionalFeatures store={state.store} buyItem={buyItem} />
      <Total car={state.car} additionalPrice={state.additionalPrice} />
    </div>
  </div>
);
};

const mapStateToProps = state => {
  return {
    // car: state.car,
    // additionalPrice: state.additionalPrice,
    // store: state.store
    state
  };
};

export default connect(mapStateToProps, 
  { addFeature, removeFeature } )(App);
