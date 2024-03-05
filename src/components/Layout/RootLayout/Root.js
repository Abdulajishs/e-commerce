import HeaderGlobal from "../Header/HeaderGlobal";
import Footer from "../Footer/Footer"

const RootLayout = (props) => {

    return (
        <>
        <HeaderGlobal />
            {props.children}
        <Footer />
        </>
    )
}

export default RootLayout;