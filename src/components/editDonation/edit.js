import React from 'react'
import { connect } from 'react-redux';
import { actions } from '../../redux/action';
import EditDonation from './editDonation'

import './editDonation.css'
const mapStateToProps = (state) => {
    return {
    currentDonation:state.DonationReducer.currentDonation
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
   updateDonation: (a) => dispatch({ type: 'UPDATE_DONATION', payload: a }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(function Donation(props) {
    const {createDonationn,currentDonation,updateDonation} = props
  const { handleSubmit} = props
const submitDonation = (values1) => {
    let values={...values1}
    updateDonation({form:{values}})
}


return (
    <> 
     <div className="main">   
     <EditDonation onSubmit={submitDonation}></EditDonation>
</div> 
    </>
)
})
