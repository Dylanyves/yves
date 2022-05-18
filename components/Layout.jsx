import React from "react";
import { Navbar, Footer } from "./index";

function Layout({ children }) {
    return (
        <div className="overflow-hidden">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
