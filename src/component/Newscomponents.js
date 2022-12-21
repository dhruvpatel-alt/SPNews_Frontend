import React from 'react'
const Newscomponents=(props)=> {

  
        let {title,description,imageurl,newsurl,time,author,source}=props;
        return (
            <div>
             <div className="card mx-4" >
             <a href={newsurl} >
             <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"86%"}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
             </a>
  <img src={imageurl} className="card-img-top" alt="no img"/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">by {author} on {new Date(time).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-danger">Read More</a>
  </div>
</div>
            </div>
        )
  
}

export default Newscomponents