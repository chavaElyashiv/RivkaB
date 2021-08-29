import { createStore, combineReducers,applyMiddleware  } from 'redux';
import DonationReducer from './reducer';


import {createDonationnn,editDonation} from '../middleWare/get'
import { reducer as formReducer } from 'redux-form'
import { enableMapSet } from 'immer'

enableMapSet()

const reducer = combineReducers({DonationReducer,form: formReducer.plugin({
    contact: (state, action) => { // <------ 'account' is name of form given to reduxForm()
      switch(action.type) {
        case "ACCOUNT_SAVE_SUCCESS":
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    

}})
})

const store = createStore(reducer, applyMiddleware(createDonationnn,editDonation));


//store.dispatch({ type: 'GET_CRM' });
store.dispatch({type:'CHANGE_UMTOUID'});
window.store = store;
export default store;