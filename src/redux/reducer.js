import produce from 'immer';
 import createReducer from "./reducerUtils";

const initialState = {
    donation:{
        _id:"",
        name: "",
        type:"",
        sum:0,
        condition:"",
        currencyType:"",
        currencyRate:0

    } ,
    listDonations:[{
        id:0,
        name: "ישות1",
        type:"מדינה זרה",
        sum:100,
        condition:"",
        currencyType:"שח",
        currencyRate:3.2
    }],
    currentDonation:{

    },
    route:"create",
    flag:false


};

const agent = {

    setDonation(state, action) {
        if(state.listDonations.length>0)
        {
        let d=state.listDonations[state.listDonations.length-1]
        state.currentDonation=action.payload
        state.currentDonation.id=d.id+1
        }
        else
        state.currentDonation.id=0
        state.listDonations.push(action.payload)
        state.route="list"
        
    },
    setEdit(state, action) {
        state.route="edit"
        state.currentDonation=state.listDonations.find(c=>c.id==action.payload)

        
    },
    setEdit1(state, action) {
        if(state.flag===false)
        state.flag=true
        else
        state.flag=false
        state.currentDonation=state.listDonations.find(c=>c.id==action.payload)
        state.route="edittt"
        
    },
    setUpdateDonation(state,action){
        state.flag=false
        state.listDonations=state.listDonations.map(x => x.id == action.payload.id?x=action.payload:x)
        state.route="list"
    },
    list(state, action) {
        state.listDonations = action.payload;
    },
    editDonation(state, action) {
        
    },
    setRoute(state, action){
        state.route="create"

    },
    deleteDonation(state,action){
        state.listDonations=state.listDonations.filter(x => x.id != action.payload)

    }


};

export default produce((state, action) => createReducer(state, action, agent), initialState);