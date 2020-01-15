import React from 'react'
import Banner from '../components/banner/banner'
import Layout from '../components/layout'

const ctoAdvisor = () => {
    return (
        <Layout>
            <Banner title={'CTO Advisor'} />
            <div className="center">
                <div className="content post-structure">
                    <h2>Translating Truth from Hype</h2>

                    <p>Truth be told, one of my superpowers is an internal BS meter. I’m able to translate techno-geek into integration strategies that drive business solutions. That’s why CTO’s tap into my experience with solution architecture and migration strategies. Having founded and built — from the ground up — a computer business that included custom software, sales, service, and training, I understand how legacy systems and new technologies fit together.</p>

                    <h2>An Objective CTO Advisor</h2>

                    <p>When CTOs want an objective evaluation, they call me to:</p>

                    <ul>
                        <li>
                            Weed through RFPs, user requirements, and system capabilities to determine what’s possible and what’s not
                </li>
                        <li>
                            Translate business requirements into migration plans
                </li>
                        <li>
                            Create clean specifications so teams have everything they need to achieve success
                </li>
                    </ul>

                    <p>I have experience in:</p>

                    <ul>
                        <li>
                            Building the architecture for full stack engineering
                </li>
                        <li>Managing remote Engineering teams</li>
                        <li>Creating training that memorializes institutional knowledge and standard operating procedures
            </li>
                        <li>Authoring training courses covering JavaScript frameworks such as React and ExtJS, Microsoft web technologies, Node, SQL Server, Redis and others
                </li>
                        <li>
                            Organizing technical communities for educational and networking growth
                </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default ctoAdvisor