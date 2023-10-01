import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardD from "../component/productDetail/productDetail";

export default function Detail(){
    const value = useParams();
    const [cardx, setcardx] = useState()

    useEffect(()=>{
        axios
        .get(`https://dummyjson.com/products/${value.id}`)
        .then((res)=>{
            setcardx(res.data)
            console.log(res.data)
        })
        .catch((err)=>{console.log(err)})
    },[]);
    return(
        // <h1>{cardx?.title}</h1>
        
            cardx ? <CardD item={cardx}/> : ""
        
        
            
        
    );
}