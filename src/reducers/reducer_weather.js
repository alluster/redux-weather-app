import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    //Avoiding State mutations
    //  return state.concat([action.payload.data]); we never want to manipulate existing array. We want to create totally new array
    return [ action.payload.data, ...state ];
    // |city, city, city] not [city], [city] etc
  }
  return state;
}
