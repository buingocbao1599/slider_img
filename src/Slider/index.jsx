import React, { useState } from 'react'
import Pic1 from "./img/pic1.jpg"
import Pic2 from "./img/pic2.jpg"
import Pic3 from "./img/pic3.jpg"
import Pic4 from "./img/pic4.jpg"
import "./index.css"

export default function Index() {
    const [activeDot, setActiveDot] = useState(1);

    return (
        <section className='container-slider'>
            <div className='slider-wrapper'>
                <div className='slider'>
                    <img id='img1' src={Pic1} alt='pic1' />
                    <img id='img2' src={Pic2} alt='pic2' />
                    <img id='img3' src={Pic3} alt='pic3' />
                    <img id='img4' src={Pic4} alt='pic4' />
                </div>
                <div className='slider-nav'>
                    <a href="#img1" className={activeDot === 1 ? "dot_active" : "dot_not_active"} onClick={() => setActiveDot(1)}></a>
                    <a href="#img2" className={activeDot === 2 ? "dot_active" : "dot_not_active"} onClick={() => setActiveDot(2)}></a>
                    <a href="#img3" className={activeDot === 3 ? "dot_active" : "dot_not_active"} onClick={() => setActiveDot(3)}></a>
                    <a href="#img4" className={activeDot === 4 ? "dot_active" : "dot_not_active"} onClick={() => setActiveDot(4)}></a>
                </div>
            </div>
        </section>
    )
}
