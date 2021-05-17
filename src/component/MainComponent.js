import {useState, useEffect} from 'react';
import News from './New';
import VerticalView from './VerticalView';
import axios from 'axios';
import SideBar from './SideBar';
import Pagination from './Pagination';
function MainComponent(){
	const [data, setData] = useState([]);
	const [horizontalView, setHorizontalView] = useState(true);
	const [verticalView, setVerticalView] = useState(false);
	const [viewForm, setViewForm] = useState(false);

	useEffect(()=>{
		axios.get('https://api.first.org/data/v1/news')
			.then((res)=>{
				console.log(res.data);
				setData(res.data.data);
			})
			.catch((error)=>{
				console.log(error.toString());
			})
			.finally(()=>{
				console.log('job done');
			})
	},[]);

	const showHorizontal = ()=>{
		
		setHorizontalView(true);
		setVerticalView(false);
	}
	const showVertical = ()=>{
		
		
		setHorizontalView(false);
		setVerticalView(true);
	}
	const closeNews = (idToDelete)=>{
		
		let afterDelete = data.filter((val, index)=>{
			if(val.id == idToDelete)
				return false
			return true

		})
		setData(afterDelete);
	}
	const dispalyForm =()=>{
		alert(12);
		setViewForm(true)
    
	}
	return (
		<div className='container'>
			<div className='row'>
				<div className="col-md-4">
        			<SideBar showHorizontal={showHorizontal} showVertical={showVertical} horizontalView={horizontalView} verticalView={verticalView} dispalyForm={dispalyForm} viewForm={viewForm}/>
        		</div>

        	{
        		!horizontalView ? <div className='col-md-8'><Pagination data={data} RenderComponent={VerticalView} title="News Posts" pageLimit={3} dataLimit={4} closeNews={closeNews}/></div> : <div className='col-md-8'><Pagination data={data} RenderComponent={News} title="News Posts" pageLimit={3} dataLimit={3} closeNews={closeNews}/></div>
			}

			</div>
		</div>
		
		)
}
export default MainComponent;



