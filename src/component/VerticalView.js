
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CancelIcon from '@material-ui/icons/Cancel';
function VerticalView(props){
	const { id, title, summary, link} = props.data;
	const closeNews = props.closeNews;
	return (
		<>
			{
				// data.map((val, index)=>(
					// <div className='col-md-12 mt-4'>
						<div className='col-md-6'>
							<div className='card' style={{height:"260px", width:'100%', float:'left', margin:'20px'}}>
								<div onClick={()=>{closeNews(id)}}><CancelIcon color='primary' style={{fontSize:'20px', float:'right'}}/></div>
								<div className='card-body p-4' style={{overflow:'hidden'}} >
									<b className='card-title'>{title}</b>
									<p className='card-text'>{summary}</p>
									<a href={link}><button className='btn btn-primary'>read more</button></a> 
								</div>
							</div>

						</div>
					// </div>

				
				// ))
			}

		</>
		)
}
export default VerticalView;



