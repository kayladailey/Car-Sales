//Our reducer file must have some initial state setup. lines 3-21 contain the initial
//state for the entire application

const initialState = 
{
    additionalPrice: 0,
   
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },

    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

//Our actual reducer funtion will state in the initial state and an action as the parameters line 26
//Lines 28 - 52 are our switch statements which are initiated by the corrisponding action that is passed in at the time
//line 56-57 will be our default case 'if all else fails return current state'
const reducer = (state = initialState,  action) => {

    switch(action.type) {
 
       case ADD_FEATURE:
           return {
             ...state, 
              car: {
                 ...state.car, 
                 features: [...state.car.features, action.payload ]
              },
              additionalPrice: state.additionalPrice + action.payload.price,
              store: state.store.filter(feature => feature.id !== action.payload.id)
           };
 
       case REMOVE_FEATURE:
           return {
               ...state,
               car: {
                 ...state.car,
                 features: state.car.features.filter(
                   feature => feature.id !== action.payload.id
                 )
               },
               additionalPrice: state.additionalPrice - action.payload.price,
               store: [...state.store, action.payload]
           };
 
 
         default:
           return state; 
    };
  };
  
  export default {reducer, initialState};