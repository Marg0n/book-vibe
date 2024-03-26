import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";


const MainLayouts = () => {
    return (
        <>
            <Nav />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default MainLayouts;