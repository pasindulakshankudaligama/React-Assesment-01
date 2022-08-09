import {Route,Routes} from "react-router-dom";
import LoginUser from "../pages/session/Login/user";
import RegisterUser from "../pages/RegisterUser";
import ProductManage from "../pages/ProductManage";
import CartManage from "../pages/CartManage";
import Dashboard from "../pages/dashboard/dashboard";


function App() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<LoginUser/>}/>
                <Route path="/register" element={<RegisterUser/>}/>
                <Route path="dashboard">
                    <Route index element={<Dashboard/>}/>
                    <Route path="productmanage" element={<ProductManage/>}/>
                    <Route path="cartmanage" element={<CartManage/>}/>
                </Route>
            </Route>

        </Routes>
    )
}
export default App;
