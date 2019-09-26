import React from 'react'
import Loader from 'react-loader-spinner'

const LoadingView = () => {
    return (
        <div className="loading">
            <Loader
                type="Oval"
                color="black"
                height={50}
                width={45}
            />
            <p>Loading...</p></div>
    );
};

export default LoadingView;