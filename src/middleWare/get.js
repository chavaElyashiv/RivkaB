import $ from 'jquery';
import { actions } from '../redux/action';

export const createDonationnn = ({ dispatch, getState }) => next => action => { 
    if (action.type === 'CREATE_DONATION') {
        let donation={}
        donation=action.payload.form.values
        dispatch({ type: "SET_DONATION", payload: donation });
        // return fetch(`https://localhost:50105/api`,{
        //     method: 'POST',
        //     headers: {
        //         Authorization: TokenToString,
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //     }
        //     )
        // })
        // .then((res) => res.json()).then((resJson) => {
        //     console.log("",resJson);
        //      dispatch({ type: "SET_CREATE", payload: resJson });
        //  }).catch((err) => {
        //     console.log(err)
        // })

    }
    return next(action);
}
export const editDonation = ({ dispatch, getState }) => next => action => { 
    if (action.type === 'UPDATE_DONATION') {
        let donation={}
        let idDonation
        donation=action.payload.form.values
        idDonation=action.payload.form.values.id
        dispatch({ type: "SET_UPDATE_DONATION", payload: donation });
        // return fetch(`https://localhost:50105/api/donations/${idDonation}`,{
        //     method: 'PUT',
        //     headers: {
        //         Authorization: TokenToString,
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //     }
        //     )
        // })
        // .then((res) => res.json()).then((resJson) => {
        //     console.log("",resJson);
        //      dispatch({ type: "SET_CREATE", payload: resJson });
        //  }).catch((err) => {
        //     console.log(err)
        // })

    }
    return next(action);
}

