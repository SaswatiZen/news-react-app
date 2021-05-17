import React, { useState, useEffect } from "react";
import '../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

//https://careers.kalpas.in/react-developer/
function News() {
  const [page, setPage] = useState(1);
  const [commitHistory, setCommitHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMoreCommit = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(
      `https://api.first.org/data/v1/news`,
      
    )
      .then(res => res.json())
      .then(response => {
        setCommitHistory(response.data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [page]);
  console.log(commitHistory);
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="col-md-12 mt-4">
            <div className="card" style={{height:"100px"}}>
              <img className="card-img-top" src="img/profile_img.jpg" alt="Card image cap" style={{height:"50px",width:"50px"}} />
              <div className="card-body">
                <h5 className="card-title">Hi Rider</h5>
                <p className="card-text">Here's is your news.</p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <h1>View Toggle</h1>
          </div>
          <div className="col-md-12">
            <h1>Have A Feedback</h1> 
          </div>
        </div>       
        <div className="col-md-8">
          {commitHistory.map((c, index) => (
            <div className="col-md-12 mt-4" key={c.id}>
              <div className="card" style={{height:"200px"}}>
                <div className="card-body p-2">
                  <a href={c.link} style={{textDecoration:"none"}} className="card-title">{c.title}</a>
                  <p className="card-text">{c.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>       
      </div>
    </div>
  )
  // return (
  //   <div>
  //     <h1> API calls with React Hooks </h1>
  //     {isLoading && <p>Wait I'm Loading comments for you</p>}

  //     {commitHistory.length !== 0 && (
  //       <button onClick={loadMoreCommit}>Load More Commits</button>
  //     )}

  //     {commitHistory.map((c, index) => (
  //       <div key={index}>
  //         {c.commit && (
  //           <>
  //             <div>
  //               <h2 style={{ textDecoration: "Underline" }}>
  //                 {c.commit.committer.name}
  //               </h2>
  //               <p>{c.commit.message}</p>
  //             </div>
  //             <hr />
  //           </>
  //         )}
  //       </div>
  //     ))}
  //   </div>
  // );
}
export default News;
//const rootElement = document.getElementById("root");
//ReactDOM.render(<GithubCommit />, rootElement);
