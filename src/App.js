import './App.css';
import React, {Suspense, useState } from 'react'
import News  from './component/News' ;
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,

  Route
} from "react-router-dom";
import MainNavigation from './component/Navigation/MainNavigation';

const App=()=>{

const [progress,setProgress]=useState(0);
const loading=true;
const apiKey="c478932c054e44be96c71cd0a90fd69b";
const [query,setQuery]=useState("");
let routes;
routes=(
  <Routes>
<Route  path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="home"  pagesize={9} country="in" cate="general" query={query} loading={loading}/>}/>
<Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business"  pagesize={9} country="in" cate="business" query={query} loading={loading}/>}/>
<Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment"  pagesize={9} country="in" cate="entertainment" query={query}/>}/>
<Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general"  pagesize={9} country="in" cate="general" query={query} loading={loading}/>}/>
<Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health"  pagesize={9} country="in" cate="health" query={query} loading={loading}/>}/>
<Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science"  pagesize={9} country="in" cate="science" query={query} loading={loading}/>}/>
<Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports"  pagesize={9} country="in" cate="sports" query={query} loading={loading}/>}/>
<Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology"  pagesize={9} country="in" cate="technology" query={query} loading={loading}/>}/>
</Routes>
)
    return (
      <Router>
      <MainNavigation/>
    <main>
<Suspense fallback={<div className='center'><LoadingBar/></div>}>
     {routes}
     </Suspense>  
      </main>
      </Router>
    )
 
}


{/* 
  <Routes> 
<Route  path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="home"  pagesize={9} country="in" cate="general" query={query} loading={loading}/>}/>
<Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business"  pagesize={9} country="in" cate="business" query={query} loading={loading}/>}/>
<Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment"  pagesize={9} country="in" cate="entertainment" query={query}/>}/>
<Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general"  pagesize={9} country="in" cate="general" query={query} loading={loading}/>}/>
<Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health"  pagesize={9} country="in" cate="health" query={query} loading={loading}/>}/>
<Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science"  pagesize={9} country="in" cate="science" query={query} loading={loading}/>}/>
<Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports"  pagesize={9} country="in" cate="sports" query={query} loading={loading}/>}/>
<Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology"  pagesize={9} country="in" cate="technology" query={query} loading={loading}/>}/>
        </Routes>
 */}
export default App;