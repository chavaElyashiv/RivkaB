import React from 'react'
import { connect } from 'react-redux';

import Create from './createDonation/create'

import ListDonations from './listDonations'

var url = window.location;
const params = new URLSearchParams(url.search);
const arrUrl=url.pathname.split('/');
const mapStateToProps = (state) => {
    return {
        route:state.DonationReducer.route

    }
}
export default connect(mapStateToProps)(function MainWarp(props) {

  return (
      <> 
      {/* <Router>
          <Switch>
              {arrUrl[1]==="list" && <ListDonations></ListDonations>}
              {arrUrl[1]==="create" && <Create></Create>}
              {arrUrl[1]==="edit" && <EditDonation></EditDonation>}
              {<Create></Create>}
          </Switch>
      </Router> */}
      {props.route=="create"?
       <Create></Create>:
    //    props.route=="edit"?
    //    <Edit></Edit>
       <ListDonations></ListDonations>}


      </>
  )
})
