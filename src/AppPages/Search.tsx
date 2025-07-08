import { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';


export default function SearchPage(){
    const navigate= useNavigate();
    const params = useParams();
    const keyword= params.keyword;

    return(
        <div>
            <div className="navbar px-3" style={{backgroundColor:'lightgoldenrodyellow'}}>
                    <h1 style={{color:'brown'}} className="comp-logo cursor-pointer me-5"
                    onClick={()=>navigate("/")}>
                    Clays
                    </h1>

            </div>
        </div>
    )
}