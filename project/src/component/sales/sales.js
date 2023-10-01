import { useDispatch, useSelector } from "react-redux";
import { addItem, decraceCountItem, decreaseCounter, deleteItem, incraseCountItem, increaseCounter, subPrice, sumPrice } from "../../store/slice/counter";

export default function Sales({item}){
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch()
    
    return(
        <div className="d-flex border m-5  justify-content-start w-50">
            <div className="me-5 w-50" >
                <img src={item.images[0]} className="card-img-top" alt="..." style={{height: '250px', width : '100%'}}/>
            </div>
            <div className="mx-5">
                <h3>{item.title}</h3>
                <div className="d-flex">
                    <button type="button" className="btn btn-outline-secondary rounded-pill m-2" onClick={()=>{dispatch(decraceCountItem(item)); dispatch(decreaseCounter()); dispatch(subPrice(item))}}>-</button>
                    <h1>{count[item.id]}</h1>
                    <button type="button" className="btn btn-outline-secondary rounded-pill m-2" onClick={()=>{dispatch(incraseCountItem(item)); dispatch(increaseCounter()); dispatch(sumPrice(item))}}>+</button>
                </div>
                <h6>price: {item.price}$</h6>
                
                <button type="button" className="btn btn-danger rounded-pill m-2" onClick={()=>{dispatch(deleteItem(item))}}>remove</button>

            </div>
        </div>
    );
}