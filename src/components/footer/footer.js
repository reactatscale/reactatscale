import React from 'react'

// * Styles 
import './footer.sass'

const Footer = () => {
    const getYear = () => new Date().getFullYear()

    return (
        <div>
            <div className='footer'>
                {/* // * Social Icons */}
                <a href="https://twitter.com/pkellner" target="_blank" rel="noreferrer" className="icon">
                    <img src="../icons/twitter-logo.svg" alt="Twitter Logo" />
                </a>
                <a href="https://www.linkedin.com/in/peterkellner99" target="_blank" rel="noreferrer" className="icon">
                    <img src="../icons/linkedin-logo.svg" alt="Linkedin Logo" />
                </a>
                <a href="https://github.com/pkellner" target="_blank" rel="noreferrer" className="icon">
                    <img src="../icons/github-logo.svg" alt="Github Logo" />
                </a>

                {/* // * PluralSight and SVCC */}
                <a href="https://www.pluralsight.com/authors/peter-kellner?clickid=yEHV9rz0pxyOT-UwUx0Mo3cjUknRunz5wzzg1M0&irgwc=1&mpid=1196644&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1196644&aid=7010a000001xAKZAA2" target="_blank" rel="noreferrer" className="brand">
                    <img src="../logos/pluralsight.png" alt="PluralSight Logo" />
                </a>
                <a href="https://www.siliconvalley-codecamp.com/" target="_blank" rel="noreferrer" className="brand">
                    <img src="../logos/svcc.png" alt="SVCC Founder Logo" />
                </a>
            </div>

            <div className="copyright"><p>Copyright © {getYear()}</p></div>
        </div>
    )
}

export default Footer