import {useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button, Modal} from 'react-bootstrap';
import Iframe from 'react-iframe';

function News(props){
	const { id, title, summary, link, published } = props.data;
	const closeNews = props.closeNews;
	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
	return (
		<div>
			 {/* {data.map((c, index) => ( */}

            <div className="col-md-12 mt-1" key={id}>

              	<div className="card" style={{height:"140px", width:"100%", display:'inline-block', margin:'20px'}}>
               			<div onClick={()=>{closeNews(id)}}><CancelIcon color='primary' style={{fontSize:'20px', float:'right'}}/></div>
                		<div className="card-body p-2">
                  			<a href="#" style={{textDecoration:"none"}} className="card-title" onClick={handleShow}>
								  {title}
							</a>
                  				  <div style={{height:'45px', overflow:'hidden', marginTop:'6px', marginBottom:'20px'}}><p className="card-text">{summary}</p></div>
                  				<p style={{fontSize:'15px', float:'right', color:'green'}}>{published}</p>

                		</div>
              	</div>
				   {/* Modal  */}
				   <Modal show={show} onHide={handleClose}>
						{/* <Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
						</Modal.Header> */}
						<Modal.Body>
						<Iframe url={link}
							width="450px"
							height="450px"
							id="myId"
							className="myClassname"
							display="initial"
							position="relative"/>

						</Modal.Body>
						{/* <Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={handleClose}>
							Save Changes
						</Button>
						</Modal.Footer> */}
					</Modal>
            </div>
          {/* ))} */}

          	


		</div>
		)
}
export default News;