import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

// * Components 
import Layout from '../components/layout'
import Banner from '../components/banner/banner'
import Head from '../components/head'

//* Styles 
import '../styles/courses.sass'

const Courses = () => {
    const data = useStaticQuery(graphql`
    query {
        imageSharp(fixed:{ originalName: {eq: "courses-mini-bg.jpg"}}) {
            fluid { ...GatsbyImageSharpFluid }
        } }`)

    return (
        <Layout>
            <Head title='Video Training Courses' />
            <Banner imgSrc={data.imageSharp.fluid} imgAlt="Map" title="Video Training Courses" />
            <div className="center">
                <div className="courses">
                    {/*// * Using React Hooks */}
                    <a href="https://www.pluralsight.com/courses/using-react-hooks" target="_black" rel="noreferrer" className="course">
                        <img src="../courses/react-hooks.png" alt="Using React Hooks" />
                    </a>

                    {/*// * Server-side React with NextJS */}
                    <a href="https://www.pluralsight.com/courses/building-server-side-rendered-react-apps-beginners" target="_black" rel="noreferrer" className="course">
                        <img src="../courses/nextjs.png" alt="Server-side React with NextJS" />
                    </a>

                    {/*// * React and APT.NET CoreT */}
                    <a href="https://www.pluralsight.com/courses/aspdotnet-core-react-building-website" target="_black" rel="noreferrer" className="course">
                        <img src="../courses/react-and-net.png" alt="React and APT.NET Core" />
                    </a>

                    {/*// * Securing Multi-tenant ASP.NET */}
                    <a href="https://www.pluralsight.com/courses/aspnet-multi-tenant-app-mvc-extjs-angular" target="_black" rel="noreferrer" className="course">
                        <img src="../courses/multi-tenant-net.png" alt="Securing Multi-tenant ASP.NET" />
                    </a>

                    {/*// * ASP.NET Core helpers */}
                    <a href="https://www.pluralsight.com/courses/aspdotnet-core-tag-helpers" target="_black" rel="noreferrer" className="course">
                        <img src="../courses/net-tag-helpers.png" alt="ASP.NET Core helpers" />
                    </a>

                    {/*// * React and ASP.NET Core */}
                    <a href="https://www.pluralsight.com/courses/aspdotnet-core-react-building-website" target="_black" rel="noreferrer" className="course">
                        <img src="../courses/react-net-core.png" alt="React and ASP.NET Core" />
                    </a>

                    {/*// * ExtJS Fundamentals */}
                    <a href="https://app.pluralsight.com/profile/author/peter-kellner?clickid=yEHV9rz0pxyOT-UwUx0Mo3cjUknWUwzBwzzg1M0&irgwc=1&mpid=1196644&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1196644&aid=7010a000001xAKZAA2" target="_black" rel="noreferrer" className="course">
                        <img src="../courses/extjs.png" alt="ExtJS Fundamentals" />
                    </a>
                </div>
            </div>

            <div className="center text-sizing">
                <div className="video">
                    <h3 className='video-title'>Preview of Server-side Rendering in React with NextJS on Pluralsight</h3>

                    <iframe src="https://www.youtube.com/embed/rJSXRGegxFw"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        loading="lazy"
                        className='video-preview'></iframe>
                </div>
            </div>
        </Layout>
    )
}

export default Courses