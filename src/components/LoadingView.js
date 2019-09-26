import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
const LoadingView = (props) => {
    return (
        <div className="container">
            <div className="m-auto text-center center-div"><Loader
                type="Oval"
                color="black"
                height={100}
                width={100}
            /></div>

        </div>
    );
};

export default LoadingView;