'use client'

import * as Style from "./loading_spinner.style"

const LoadingSpinner = () => {

    return (
        <Style.LoadingSpinner>
            <div className="container">
                <div className="one common" />
                <div className="two common" />
                <div className="three common" />
                <div className="four common" />
                <div className="five common" />
                <div className="six common" />
                <div className="seven common" />
                <div className="eight common" />
            </div>
        </Style.LoadingSpinner>
    )
}

export default LoadingSpinner;