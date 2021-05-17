function NewsFeed({commitHistory})
{
	return (
		<div>
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
		)
}
export default NewsFeed;