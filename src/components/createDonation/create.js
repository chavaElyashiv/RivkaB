import React from 'react'
import { connect } from 'react-redux';
import { actions } from '../../redux/action';
import CreateDonation from './createDonation'

import './createDonation.css'
const mapStateToProps = (state) => {
    return {
    currentDonation:state.DonationReducer.currentDonation
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    createDonationn: (a) => dispatch({ type: 'CREATE_DONATION', payload: a }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(function Donation(props) {
    const {createDonationn,currentDonation,updateDonation} = props
  const { handleSubmit} = props
const submitDonation = (values1) => {
    let values={...values1}
   createDonationn({form:{values}})
}


return (
    <> 
     <div className="main">   
     <CreateDonation onSubmit={submitDonation}></CreateDonation>
</div> 
    </>
)
})
