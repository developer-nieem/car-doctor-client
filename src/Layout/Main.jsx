import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
    return (
        <div>
            <div className='md:w-[85%] mx-auto'>
            <Header></Header>
           
           <Outlet ></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;