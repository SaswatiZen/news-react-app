import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import CancelIcon from '@material-ui/icons/Cancel';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import {useState, useEffect} from 'react';
import { Button, Modal, Form} from 'react-bootstrap';
import Iframe from 'react-iframe';
import countryList from './country-list.json'


function SideBar({showHorizontal, showVertical, horizontalView, verticalView, dispalyForm, viewForm}){
	const hColor = (horizontalView == true) ? {backgroundColor:'#0edad1'}:{backgroundColor:'#ccc'};
	const vColor = (verticalView == true) ? {backgroundColor:'#0edad1'}:{backgroundColor:'#ccc'};
// console.log(viewForm);  
console.log(countryList);
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

	return (
		<div>

        


				        <div className="col-md-12 mt-5">
            			<div className="card" style={{height:"120px", textAlign:'center'}}>
                      <div className="card-body">
                        <img src='profile.jpg' className='card-img-top' style={{height:'40px', width:'50px', marginBottom:'4px'}}/>
                        <p className="card-title" style={{fontSize:'15px', fontWeight:'bold'}}>Hi Reader</p>
                         <p className="card-text">Here's is your news.</p>
                      </div>
                  </div>
                </div>
          			



          			<div className="col-md-12 mt-5">
            			<div className="card" style={{height:"150px", textAlign:'center'}}>
                      <div className="card-body">
              					<h5 className="card-title">View Toggle</h5>
              					     <div className='col-md-12'>				
              					           <div className='col-md-6' style={{ margin:'2px', display:'inline', padding:'10px'}}>
              					 	             <button style={hColor} className={`btn ${horizontalView == true ? 'Active' :''}`}  onClick={showHorizontal}><ViewListIcon style={{fontSize:'50px'}}/></button>
              					           </div>
              					           <div className='col-md-6' style={{ margin:'2px', display:'inline', padding:'10px'}}>
              					 	             <button style={vColor} className={`btn ${verticalView == true ? 'Active' :''}`} onClick={showVertical}><ViewColumnIcon style={{fontSize:'50px'}}/></button>
              				            </div>
              					     </div>
              				</div>
              			</div>
          			</div>
          			


          			<div className="col-md-12 mt-5">
            			<div className="card" style={{height:"150px", textAlign:'center'}}>
                      <div className="card-body">
                				  <h5 className="card-title">Have a Feedback?</h5>
               					  <p className="card-text">Here's is your news.</p>
               					  <button type="button" className="btn btn-success btn-lg" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#staticBackdrop">We're Listening!</button>
              				</div>
              			</div>
          			</div>


                <div className='col-md-5'>
                    {/* Modal  */}

                    <Modal show={show} onHide={handleClose}>

                             <Modal.Header closeButton>
                                <Modal.Title><h5>Thank you so much for taking the time!</h5><p style={{fontSize:'15px'}}>Please provide the below details!</p></Modal.Title>
                              </Modal.Header> 
                          
                            <Modal.Body>
                                
                                <Form>
                                    <Form.Group>
                                        <Form.Label>First Name</Form.Label>
                                          <Form.Control type="text"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Last Name</Form.Label>
                                          <Form.Control type="text"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                          <Form.Control type="text"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <label for="country" class="form-label">Country:</label>
                                              <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="India" />
                                                  <datalist id="datalistOptions">
                                                           {countryList.map((country) => {
                                                                        return <option value={country.label} />
                                                                          })
                                                            }
                                                  </datalist>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email ID</Form.Label>
                                          <Form.Control type="email"/>
                                          <Form.Text className="text-danger">
                                                    Please enter a valid e-mail
                                          </Form.Text>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Phone Number</Form.Label>
                                          <Form.Control type="number"/>
                                          <Form.Text className="text-danger">
                                                    Please enter a valid number
                                          </Form.Text>
                                    </Form.Group>
                                </Form>

                            </Modal.Body>

                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose} border='1px solid grey'>Close</Button>
                              <Button variant="success" onClick={handleClose}>Submit Feedback</Button>
                            </Modal.Footer>
                    </Modal>  
                </div>
      
   </div>

 



		)
}
export default SideBar;