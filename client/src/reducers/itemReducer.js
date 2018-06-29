import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/types';


const intialState = {
  items: [
    { id: uuid(), name: 'Walk Dog' },
    { id: uuid(), name: 'Work' },
    { id: uuid(), name: 'Cook Food' },
    { id: uuid(), name: 'Drink Ciders' }
  ]  
}

export default function (state = intialState, action) {
  switch(action.type) {
    case GET_ITEMS:
    return {
      ...state
    }
    default: 
      return state;
  }
}