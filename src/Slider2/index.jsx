import React, { useEffect, useState } from 'react'
import Pic1 from "./img/pic1.jpg"
import Pic2 from "./img/pic2.jpg"
import Pic3 from "./img/pic3.jpg"
import Pic4 from "./img/pic4.jpg"
import './index.css'

const numImgInOneSlider = 2;
const numberSliderOnRow = 1;


export default function Index() {
    const listData = [
        Pic1, Pic2, Pic3, Pic4, Pic3, Pic1, Pic2
    ]
    const [numCurrentSilder, setNumCurrentSilder] = useState(1);

    const maxNumSilder = (listData.length / numImgInOneSlider) > Math.round(listData.length / numImgInOneSlider)
        ? (Math.round(listData.length / numImgInOneSlider) + 1) : Math.round(listData.length / numImgInOneSlider);

    const [listDataShow, setListDataShow] = useState([]);
    useEffect(() => {
        const numPreSlice = (numCurrentSilder - 1) * numImgInOneSlider;
        const numNextSlice = numCurrentSilder * numImgInOneSlider;
        const listSlice = listData.slice(numPreSlice, numNextSlice);
        console.log("listSlice: ", listSlice);
        setListDataShow(listSlice)
    }, [numCurrentSilder])

    const handleChangeSlider = (status) => {
        if (status == "next") {
            setNumCurrentSilder(numCurrentSilder + 1);
        } else {
            setNumCurrentSilder(numCurrentSilder - 1)
        }
    }

    console.log("numCurrentSilder: ", numCurrentSilder);

    return (
        <div className='main_slider2'>
            {numCurrentSilder != 1 && <div onClick={() => handleChangeSlider('pre')}>Preveous</div>}
            {
                listDataShow.slice(0, numberSliderOnRow).map((item) => (
                    <img src={item} />
                ))
            }
            {
                listDataShow.slice(numberSliderOnRow, numImgInOneSlider).map((item) => (
                    <img src={item} />
                ))
            }
            {numCurrentSilder != maxNumSilder && <div onClick={() => handleChangeSlider('next')}>Next</div>}

        </div>
    )
}
