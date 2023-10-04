import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./productCard";


export default function ProductList() {
    const [product, setproduct] = useState([]);

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((res) => {
                setproduct(res.data.products)
                console.log(res)
             })
            .catch((err) => { console.log(err) })
    }, []);
    return (
        <div className="p-5 m-5">
        <h4 className="fw-bold p-">Welcome to our website ...</h4>
            <hr/>
       
        <div className="row row-cols-1 row-cols-md-3 g-4">
            
            {
                product.map((p,i)=>{
                    return(
                        <ProductCard item={p}/>
                    );
                })
            }
            
        </div>
        </div>

    );
}