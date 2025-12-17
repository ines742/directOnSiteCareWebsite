import Footer from "./partials/Footer";
import Navbar from "./partials/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="pt-[120px]">
                <div className=" max-w-7xl mx-auto" >
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}

