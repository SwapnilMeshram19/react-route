import React, { useEffect, useState } from "react";
import {useParams,Navigate} from "react-router-dom";
const ProductDetails =()=>{
    const {id}=useParams();
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:3000/Product")
          .then((res) => res.json())
          .then((res) => {setData(res.find((ele)=>{
            return ele.id==id;
          }))})
          .catch((error) => console.log(error))
          .finally(()=>setLoading(false));
      }, []);


      console.log();

    return (
       
        <div>
             {
            loading?<div>Loading....</div>:data==undefined?<Navigate to="/NotFound"></Navigate>:<div>
            <div>Id: {id}</div>
            <div>Name: {data.name}</div>
            <div>Price: {data.price}</div>
            
            </div>
           }
            
        </div>
    )

}
export default ProductDetails;