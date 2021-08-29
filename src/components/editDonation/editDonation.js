import React from 'react'
import { Field ,reduxForm} from 'redux-form'
import { Button, Form, Col, Row,Container } from "react-bootstrap";
import { connect } from 'react-redux';
import './editDonation.css'

    const Input = ({ input, meta, ...props }) => {
       return <Form.Control className="inputForm1"   {...props} {...input} />
    }
    const InputSelect = ({ input, meta, ...props }) => {
      return  <Form.Control className="inputForm1" {...props} {...input} as="select"/>
  
  }
  const InputTextarea = ({ input, meta, ...props }) => {
    return <Form.Control as="textarea" className="inputForm" style={{width:"390px"}} {...props} {...input} />
}
  const mapStateToProps = (state) => {  
    return {
        
        route: state.DonationReducer.route,
        initialValues:state.DonationReducer.currentDonation
 
}}
function Edit(props) {
  const { handleSubmit} = props


  return (
    <>
    <div className="form">
  

    {/*  */}
     <Form  onSubmit={handleSubmit}>

              <Container>
                <br></br>
              <Row>
                
              <Field  required="required" name="name" disabled={props.route=="edit"?"":"disabled"} placeholder="שם הישות המדינית הזרה*"  component={Input}  type="text"/>
              </Row><br></br>
              <Row>
              <Field required="required" name="sum" disabled={props.route=="edit"?"":"disabled"} placeholder="סכום התרומה בשח*"  component={Input}  type="text"/>
              </Row><br></br>
              <Row>
              <Field required="required" name="type" disabled={props.route=="edit"?"":"disabled"}  component={InputSelect}>
              <option value="" >סוג הישות המדינית הזרה*</option>
              <option value="yes" >מדינה זרה</option>
              <option value="no" >לא מדינה זרה</option>
              </Field></Row><br></br>
              <Row >
              <Field required="required" name="yeud" disabled={props.route=="edit"?"":"disabled"} placeholder="יעוד התרומה* "  component={Input}  type="text"/>
              </Row><br></br>
              <Row><Col sm="12">
              <Field name="condition" disabled={props.route=="edit"?"":"disabled"} placeholder="התנאים לתרומה"  component={InputTextarea}  type="text"/></Col>
              </Row><br></br>
              <Row>
              <Field required="required" name="currencyType" disabled={props.route=="edit"?"":"disabled"} component={InputSelect}>
              <option value="">סוג המטבע*</option>
              <option value="dolar" >דולר</option>
              <option value="yuro" >יורו</option>
              </Field></Row><br></br>
              <Row>
              <Field required="required" name="currencyRate" disabled={props.route=="edit"?"":"disabled"} placeholder="שער ההמרה*"  component={Input}  type="text"/>
              </Row><br></br>
          {/* </Form.Group> */}
      
          </Container>
                              <div className="row">
           
            <div className="col button">

<Button  style={{ backgroundColor: "#25C6EA" ,borderColor: 'white', borderRadius:"14px",width: "150px"}} variant="primary" type="submit">שמירה</Button>
<Button  style={{borderColor: 'white', borderRadius:"14px",width: "150px"}} variant="primary" >ניקוי</Button>


            </div></div>       
                     
            </Form> 
            </div>                           
    </>
  )
}
export default connect(mapStateToProps)(reduxForm({
  form: 'formname', enableReinitialize: true 
})(Edit) )