import React from 'react'
import { FaCircleArrowUp } from 'react-icons/fa6';
import '../Styles/Slider.css';

const ToTop = () => {

    function topFunction() {
        window.scroll(0, 0)
    }

    window.scrollTo({
        behavior: "smooth",
    });


    return (
        <div className='TopBtn' onClick={topFunction}>
            <FaCircleArrowUp />
        </div>
    )
}

export default ToTop