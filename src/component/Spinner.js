import React from 'react'
import loading from './loading.gif'
export default function Spinner() {
    return (
        <div className="text-center" style={{display:"flex",justifyContent:"center" ,left:"30px"}}>
            <img src={loading} alt="loading"></img>
        </div>
    )
}