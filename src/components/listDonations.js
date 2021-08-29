import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { actions } from '..//redux/action';
import { BsTrash,BsPencil,BsChevronDown,BsChevronUp } from "react-icons/bs";
import './listDonations.css'
import './donation.css'
import Editt from './editDonation/edit';

const mapStateToProps = (state) => {
    return {
        donations:state.DonationReducer.listDonations,
        route:state.DonationReducer.route,
        currentDonation:state.DonationReducer.currentDonation,
        deleteDonation:state.DonationReducer.deleteDonation,
        flag:state.DonationReducer.flag

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (e) => dispatch(actions.setRoute(e)),
        setEdit: (e) => dispatch(actions.setEdit(e)),
        setEdit1: (e) => dispatch(actions.setEdit1(e)),
        deleteDonation: (e) => dispatch(actions.deleteDonation(e)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(function DashboardList(props) {

    const [style, setStyle] = useState({});
    const [contacts, setContacts] = useState({});
    var url = window.location;
    useEffect(() => {
    })

    const deleteDonation = (e) => {
        //props.setAlertstatuse(1)
        props.deleteDonation(e)
      }

    const navigateToCreate = () => {
       // window.location.href = window.location.origin + "/"+ "create";
       props.setRoute()

    }
    const navigateToEdit = (donationId) => {
        props.setEdit(donationId)

    }
    const Edit = (donationId) => {

        props.setEdit1(donationId)

    }

    return (
        <div className="main">
            <div className="row">
                <div className="col">
                    <h4></h4>
                    <h4>רשימת התרומות</h4>
                </div>
            </div>
 
            <div className="row">

                <div className="table-responsive">
                {props.donations?
                    <table className="table table-hover " >
                        <thead >
                            <tr>
                            </tr>
                        </thead>
                        
                            <tbody className="row1">
                                {props.donations
                                   
                                    .map(donation => {
                                        return (<> <tr
                                           
                                        onMouseEnter={e => {
                                            let id=donation.id
                                            setStyle({"id":id});
                                        }}
                                        onMouseLeave={e => {
                                            setStyle(null)
                                        }}
                                        >
                                                <td>{donation.name}</td>

                                                                        <td>{donation.sum}</td>
                                                                        <td>{donation.currencyType}</td>
                                                                        <>
                                                                        <td width="300px"></td>
                                                                   

                                                   <td>     <i value='click'
                        //   style={style&&style["id"]==donation.id?{display:'block'}:{display:'none'}}      
                 onClick={e => {deleteDonation(donation["id"]);
                 
                e.stopPropagation()}}>  <BsTrash/>
                 </i></td>

                                                <td>   <i value='click'
                        //    style={style&&style["id"]==donation.id?{display:'block'}:{display:'none'}}
                            onClick={e => {navigateToEdit(donation.id);e.stopPropagation()}}><BsPencil/>
                                                    </i></td>
                                                    <td>    <i value='click'
                        //    style={style&&style["id"]==donation.id?{display:'block'}:{display:'none'}}
                        onClick={e => {Edit(donation.id);e.stopPropagation()}}
                           >{!props.flag?<BsChevronDown/>:<BsChevronUp/>}
                                                    </i></td>
 </>
                                            </tr>
    {props.flag&&props.currentDonation.id==donation.id?<tr><td colSpan="12"><Editt></Editt></td></tr>:""}                                                               
                                            </>  
                                        )
                                        
                                    })
                                }
                               
                            </tbody>

                    </table>
                    :""}
                   
                </div>
            </div>
            <div className="row">
                                <div className="offset-4 col-2">
                    <button className="btn btn" style={{width: "187px", backgroundColor: "#25C6EA", color: 'white',borderRadius:"14px" }}
                    onClick={e => {navigateToCreate()}}>
                        הוספת תרומה</button>
                </div>
            </div>
        </div >
    )
}
)