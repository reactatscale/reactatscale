import React from 'react'
import Img from 'gatsby-image'

// * Styles 
import './banner.sass'

const Banner = ({ imgSrc, imgAlt, title, subTitle }) => (
    // * Use background image if exists
    imgSrc ? <div className="banner-img" >
        <Img
            fluid={imgSrc}
            fadeIn={true}
            loading={"eager"}
            className='banner-bg'
            alt={imgAlt}
        />
        <div className="page-info">
            <h1 className='banner-title'>{title}</h1>
            {subTitle && <h3 className='banner-subTitle'>{subTitle}</h3>}
        </div>
    </div>
        :
        // * Grey banner if without image
        <div className="banner-grey">
            {!title ? <img src={"../logos/logo-white.png"} alt="React at Scale Logo" className='banner-logo' />
                : <div className="page-info">
                    <h1 className='banner-title'>{title}</h1>
                    {subTitle && <h3 className='banner-subTitle'>{subTitle}</h3>}
                </div>}
        </div>
)


export default Banner