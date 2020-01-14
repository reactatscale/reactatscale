import React from 'react'
import { Link } from "gatsby"

// * Styles 
import './pager.sass'

const Pager = ({ pageContext }) => {
    const { previousPagePath, nextPagePath } = pageContext
    return (
        <nav className='pager'>
            <div className="newer">
                {previousPagePath && (
                    <Link to={previousPagePath}>
                        <button className='more-btn'>← Newer Posts</button>
                    </Link>
                )}
            </div>

            <div className="older">
                {nextPagePath && (
                    <Link to={nextPagePath}>
                        <button className='more-btn older'> Older Posts →</button>
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Pager
