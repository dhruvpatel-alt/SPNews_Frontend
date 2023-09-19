import React ,{useEffect,useState} from 'react'
import Spinner from './Spinner';
import Newscomponents from './Newscomponents'
import PropTypes from 'prop-types'
const News =(props)=> {
const [articles,setArticles]=useState([]);
const [loading,setLoading]=useState(props.loading);
// const [page,setPage]=useState(1);
const capialize=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
}
async function fetchData(){
  let url=`${process.env.REACT_APP_BACKEND_URL}/api/news/${props.cate}`;
  try{
    setLoading(true);
    props.setProgress(30);
    let data=await fetch(url,{method:'GET',  headers: {
      'Content-Type': 'application/json'}});
      console.log('done')
    props.setProgress(40);
    console.log(data)
    let parseddata=await data.json();
    props.setProgress(70);
    setLoading(false);
    console.log(parseddata.result);
    setArticles(parseddata.result);
    props.setProgress(100);

  }
catch(err){
  console.log(err);
}
 }
 useEffect(() => {
   document.title=`SPNEWS:${capialize(props.cate)}`
  fetchData();
},[props.cate])
   if(props.query!==''){
    
document.location.reload();
     }
    
  // const fetchMoreData=async ()=>{
        // props.setProgress(30);
        // let url=` process.env.REACT_APP_BACKEND_URL${props.cate}`
        // setPage(page+1);
        // props.setProgress(40);
// setLoading(true);
        // let data=await fetch(url);
        // let parseddata=await data.json();
        // console.log(parseddata)
        // props.setProgress(70);
        // setArticles(articles.concat(parseddata.articles));
// setLoading(false);


      // props.setProgress(100);
    // }
//       handleprevclick=async ()=>{
     
//      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cate}&apiKey=${props.apiKey}&page=${page-1}&pagesize=${props.pagesize}&q=${props.query}`
//      setLoading(true);
//      let data=await fetch(url);
//      let parseddata=await data.json();
// setPage(page-1); setLoading(false);   setArticles(articles.concat(parseddata.articles));
// setTotalResults(parseddata.totalResults);}
//       handlenextclick=async ()=>{
//         let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cate}&apiKey=${props.apiKey}&page=${.page+1}&pagesize=${props.pagesize}&q=${props.query}`
//        setLoading(true);
//         let data=await fetch(url);
//         let parseddata=await data.json();
//  setPage(page+1); setLoading(false);   setArticles(articles.concat(parseddata.articles));
// setTotalResults(parseddata.totalResults);}
   
        return (
       <>
       
            <h2 className="text-center" style={{marginTop:"90px"}}>SPNEWS-Top {capialize(props.cate)==="General"?'':capialize(props.cate)} Headlines </h2>
   
            {loading&&<Spinner/>}

      <div className="container">
<div className="row my-5">

          { articles.map((element,pos)=>{
            
                return <div className="col-md-4 my-4" key={pos}>
                <Newscomponents title={element.title?element.title.slice(0,52):''} description={element.description?element.description.slice(0,76):''} imageurl={element.image?element.image:"https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="} newsurl={element.newsurl?element.newsurl:"/"} author={element.author?element.author:"unknown"} time={element.time?element.time:"Today"} source={element.name?element.name:"UNKNOWN"}/>
</div>
                
})}

</div>
</div>



{/* <div className="d-flex justify-content-between">
    
<button type="button" disabled={page<=1} className="btn btn-success" onClick={handleprevclick}>&larr; Previous</button>
<button type="button" disabled={Math.ceil(totalresults/props.pagesize)<page+1} className="btn btn-success" onClick={handlenextclick}>Next &rarr;</button>
</div>*/}
</>         
        )
    
}
News.defaultProps = {country:"in",
cate:'general'}
News.propTypes = {
  country:PropTypes.string,
  cate:PropTypes.string
}
export default News
