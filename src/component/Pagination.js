import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import {useState, useEffect} from 'react';
function Pagination({data,RenderComponent, title, pageLimit, dataLimit, closeNews}){
   const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage = ()=> {
        setCurrentPage((page) => page + 1);
    }
   
    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
    }
   
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
     
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
   
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
	return (
          <div className='col-md-12'>
            <div className="dataContainer row mt-1">
              {getPaginatedData().map((d, idx) => (
                  <RenderComponent key={idx} data={d} closeNews={closeNews} />
              ))}
            </div>
            <div className="pagination">
              {/* previous button */}
              <button onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>prev</button>
      
              {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                  <button key={index} onClick={changePage} className={`paginationItem ${currentPage === item ? 'active' : null}`}>
                    <span>{item}</span>
                  </button>
            ))}
      
              {/* next button */}
                <button onClick={goToNextPage} className={`next ${currentPage === pages ? 'disabled' : ''}`}>next</button>
            </div>
          </div>
		
		)
}
export default Pagination;
