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
  
}
