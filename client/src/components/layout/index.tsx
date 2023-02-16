import Navbar from "../navbar";
import Footer from "../footer";

export default function Layout({ children }) {
    return (
        <>
            <Navbar mainPage={children}/>
            {/* <main>{children}</main> */}
            <Footer />
        </>
    )
}