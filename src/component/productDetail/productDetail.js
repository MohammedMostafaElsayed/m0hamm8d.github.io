import {  useDispatch, useSelector } from "react-redux";
import { increaseCounter } from "../../store/slice/counter";

export default function CardD({item}){
    const counter = useSelector(state => state.counter.initial);
    const dispatch = useDispatch();    
    return(
        <div className="d-flex m-5 p-5 justify-content-center w-100">
            <div className="w-50">
                <img className="m-4" src={item.images[0]} style={{width:'400px', height:"400px"}}/>
                <div className="m-3">
                    <img className="m-3" src={item.images[1]} style={{width:'90px', height:"90px"}}/>
                    <img className="m-3" src={item.images[2]} style={{width:'90px', height:"90px"}}/>
                    <img className="m-3" src={item.images[3]} style={{width:'90px', height:"90px"}}/>
                    <img className="m-3" src={item.images[4]} style={{width:'90px', height:"90px"}}/>
                </div>
            </div>
            <div className="w-25">
                <h1>{item.title}</h1>
                <h6>{item.description}</h6>
                <h5>rate: {item.rating}</h5>
                <hr/>
                <h3>price: {item.price} $</h3>
                <hr/>
                {item.stock > 50 ? 
                    <span className="m-1  badge text-bg-success">in stock</span> 
                    : <span bg="danger" className='m-1  badge text-bg-danger'>out of stock</span>
                }
                <div className="d-flex">
                    <button type="button" className="btn btn-outline-secondary rounded-pill m-2">buy now</button>
                    <button type="button" className="btn btn-outline-secondary rounded-pill m-2" onClick={()=>{dispatch(increaseCounter())}}>add to cart</button>
                </div>
            </div>
        </div>
    );
}