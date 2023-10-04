
import { useSelector } from "react-redux";
import Sales from "./sales";

export default function SalesList(){
    const items = useSelector(state => state.counter.items);
    const totalPrice = useSelector(state => state.counter.totalPrice)
    

    
    return(
        
        <div className="m-5 p-5">
            <h1>My Cart</h1>
            <hr/>
            {items.length > 0 ? <>{
                items.map((s, i) =>{
                    return(
                        <Sales item={s}/>
                    );
                })
            }
            <h1>total price: {totalPrice}$</h1> </> : <h1>Empty Cart</h1>}
            
        </div>
        
        
    );
}