import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/Gallery1.jpg'
import gallery_2 from '../../assets/Gallery2.jpg'
import gallery_3 from '../../assets/Gallery3.jpg'
import gallery_4 from '../../assets/Gallery4.jpg'
const Campus = () => {
    return (
        <div className='campus' id='campus'>
            <div className="gallery">
                <img src={gallery_1} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_3} alt="" />
                <img src={gallery_4} alt="" />
            </div>
            {/* <button className='btn seeMoreBtn'>See More Here</button> */}
        </div>
    )
}

export default Campus
