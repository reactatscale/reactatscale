import React, { useEffect, useState } from 'react'
import { Link } from "gatsby"

// * Components
import { Collapse } from '@chakra-ui/core'
import withSizes from 'react-sizes'


// * Styles 
import './header.sass'

const Header = ({ isMobile, lightNav, setNav }) => {
    const [show, setShow] = React.useState(false)

    const [mobile, toggle] = useState(false)
    useEffect(() => {
        if (!isMobile) {
            toggle(false)
            setShow(false)
        }
    })
    return (
        <div className='center'>
            <header className={!lightNav ? "header light-bg" : "header transparent-bg"}>
                <nav className="wrapper">
                    <Link to='/'><h1>Home Page and Blog</h1></Link>
                    <ul className='nav-links-wide'>
                        <li><Link to='#'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/posts'>Posts</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>

                    <button className="nav-burger" onClick={() => setShow(!show)}>MENU</button>
                </nav>

                {isMobile && <Collapse isOpen={show} duration='500'>
                    <ul className='nav-links-col'>
                        <li><Link to='#'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/posts'>Posts</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </Collapse>}
            </header>

        </div>
    )
}

const mapSizesToProps = ({ width }) => ({ isMobile: width < 850 })

export default withSizes(mapSizesToProps)(Header)