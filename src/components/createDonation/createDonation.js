import React from 'react'
import { Field ,reduxForm} from 'redux-form'
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import { connect } from 'react-redux';


import './createDonation.css'

    const Input = ({ input, meta, ...props }) => {
       return <Form.Control className="inputForm" {...props} {...input} />
    }
    const InputSelect = ({ input, meta, ...props }) => {
      return  <Form.Control className="inputForm" {...props} {...input} as="select"/> 
  }
  const InputTextarea = ({ input, meta, ...props }) => {
    return <Form.Control as="textarea" className="inputForm" {...props} {...input} />
}
const mapStateToProps = (state) => {  
  return {
   currentDonation:state.DonationReducer.currentDonation
};
}

const mapDispatchToProps = (dispatch) => ({
})

function Create(props) {
  const { handleSubmit} = props


  return (
      <>
      <div className="">
      <div className="form">
      <h2>הוספת דיווח על עמותה</h2>

      {/*  */}
       <Form  onSubmit={handleSubmit}>
                <Container>
                <Row>
               
                <Field required="required" name="name" placeholder="שם הישות המדינית הזרה*"  component={Input}  type="text"/>
                
                <Field required="required" name="sum" placeholder="סכום התרומה בשח*"  component={Input}  type="text"/>
               
                <Field required="required" name="type"   component={InputSelect}>
                <option value="" >סוג הישות המדינית הזרה*</option>
                <option value="yes" >מדינה זרה</option>
                <option value="no" >לא מדינה זרה</option>
                </Field></Row><br></br>
                <Row >
                <Field required="required" style={{width:"500px"}} name="yeud" placeholder="יעוד התרומה* "  component={Input}  type="text"/>
                </Row><br></br>
                <Row><Col sm="12">
                <Field style={{width:"500px"}} width="50px" name="condition" placeholder="התנאים לתרומה"  component={InputTextarea}  type="text"/></Col>
                </Row><br></br>
                <Row>
                <Field required="required" name="currencyType"  component={InputSelect}>
                <option value="">סוג המטבע*</option>
                <option value="דולר" >דולר</option>
                <option value="יורו" >יורו</option>
                <option value="שח" >שח</option>
                </Field>
                <Field required="required" name="currencyRate" placeholder="שער ההמרה*"  component={Input}  type="text"/>
                </Row>
            {/* </Form.Group> */}
        
            </Container>
                      
      
                      
                 
                  
                 
              
                                <div className="row">
             
              <div className="col button">
 
<Button className="   " style={{ backgroundColor: "#25C6EA" ,borderColor: 'white', borderRadius:"14px",width: "150px"}} variant="primary" type="submit">שמירה</Button>
<Button className="  pl-3 mt-4 " style={{borderColor: 'white', borderRadius:"14px",width: "150px"}} variant="primary" >ניקוי</Button>


              </div></div>       
                       
              </Form> 
              </div>   
              </div>                        
      </>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'formname', enableReinitialize: true 
})(Create) )