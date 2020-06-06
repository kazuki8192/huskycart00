import React, {Fragment} from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Main from "../organisms/Main";

const TopPageTemplate = (props) => {
    return (
        <Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </Fragment>
    )
}

export default TopPageTemplate