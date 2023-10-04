import { Route, Routes } from "react-router-dom";
import Product from "../pages/product";
import NotFound from "../pages/notFound";
import RegeterForm from "../component/regester/regester";
import Login from "../pages/login";
import Detail from "../pages/productDetail";
import SalesDetail from "../pages/salesdetais";


export default function Routers(){
    return(
        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/regester" element={<RegeterForm/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/product-detail/:id" element={<Detail/>}/>
            <Route path="/slaes-detail" element={<SalesDetail/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}