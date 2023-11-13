import React from 'react'
import "../app/global.css";

const Hero = () => {
    return (
        <div className="flex items-center justify-center bg-hero h-screen bg-fixed bg-cover">
            <div/>
            <div>
                <h2>Santiago Sanchez</h2>
                <p>Message</p>
                <button>Book</button>
            </div>
            <div></div>

        </div>
    )
}

export default Hero