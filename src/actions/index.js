export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

// Our actions will have 2 properties passed in. A type property and an optional payload property. Each action MUST have a type property. The type property is a string that explains what interaction just
//  happened. By convention, we use all caps and underscores for types - ie 'LOGIN_USER or TOGGLE_TODO. The payload property is data that goes along 
//  with that interaction.


 export const addFeature = item => {
   return {
         type: ADD_FEATURE,
         payload: item
   };
};

export const removeFeature = item => {
   return {
      type: REMOVE_FEATURE,
      payload: item
   };
};