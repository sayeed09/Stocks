import React from 'react'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const LoadingView = (props) => {
    return (
        // <div className="container bg-light">
        //     <div className="d-flex justify-content-center center-div "><Loader
        //         type="Oval"
        //         color="black"
        //         height={100}
        //         width={100}
        //     />
        //         <p>Loading... Please wait.!</p></div>

        // </div>
        // <div className="site-loader">
        //     <div className="loader-content">
        //         <i className="fa fa-circle-o-notch fa-spin"></i>
        //         <p style={{ fontSize: "13px" }}> Please wait... </p>
        //     </div>
        // </div>
        <div class="loading">Loading&#8230;</div>
    );
};

export default LoadingView;