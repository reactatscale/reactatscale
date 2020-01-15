import React from 'react'
import Banner from '../components/banner/banner'
import Layout from '../components/layout'

const MigrationStrategies = () => {
    return (
        <Layout>
            <Banner title={'Migration Strategies'} />
            <div className="center">
                <div className="content post-structure">
                    <h2>Containing & Bridging Systems</h2>

                    <p>Successful legacy migration of an existing system is about successfully replacing underlying implementations of user requirements from one (usually older) technology to another one. Often, the system being replaced is either not scaling to meet current or future business needs. Or, it’s no longer maintainable or expandable without significant changes. The key is almost always evolution rather than revolution. Building and testing subsystems and replacing them one at a time is almost always the best approach for success.</p>

                    <p>With decades of experience, I’ve created and executed migration strategies for a variety of industries, including (insert industries). When the systems to be migrated are business critical, the stakes are high. That’s where my background and technical expertise can make the process easier and run more smoothly.</p>

                    <h2>Migration Strategies for Evolving Business Needs</h2>

                    <p>From the time I founded 73rd Street Associates and ultimately sold to Vision Service Plan (VSP), I did 4 major technology shifts while moving our hundreds of remote customers through each transition successfully. Following that, I’ve worked with many companies migrating their legacy system to newer technologies. The model for success I’ve used includes:</p>


                    <ul>
                        <li>Starting with clean specifications for what the new system’s requirements of the new system</li>
                        <li>Defining what success looks like for everyone, gaining support from stakeholders, DevOps, and all affected business functions</li>
                        <li>Containing apps and taking inventory of all assets</li>
                        <li>Creating a service layer that provides consistent interfaces to each of the legacy systems</li>
                        <li>Bridging the service layers to bring them together</li>
                        <li>Finalizing deliverables and wrapping up any development loose ends</li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default MigrationStrategies