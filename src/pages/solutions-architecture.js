import React from 'react'
import { Link } from 'gatsby'
import Banner from '../components/banner/banner'
import Layout from '../components/layout'

const SolutionsArchitect = () => {
    return (
        <Layout>
            <Banner title={'Solutions Architect'} />
            <div className="center">
                <div className="content post-structure">
                    <h2>Creating Structure & Consistency</h2>

                    <p>Solution Architecture creates the blueprint for a business to achieve its goals through software development. All too often I find that organizations have rich institutional knowledge that hasn’t been memorialized. They have amassed a pattern of software coding that works for their product or service. Yet, it’s only senior and architects who know and follow those patterns. Imagine the new engineer tasked with something simple like a login for an app. “No problem,” they say. They begin to code like they did on their previous job. While they technically completed the task, much of it needs to be redone so it flows with engineering standards.” Documenting those coding patterns and standards is one way to reduce onboarding time with new engineers and create coding consistency across existing engineering teams.</p>

                    <Link to='/contact'>Contact Peter</Link>

                    <p>That’s where my talents shine. I’ve created dozens of Pluralsight training videos to solve these types of issues and __can work with your team to build custom videos that include code samples and documentation__ so there is clear guidance for new engineers to follow.</p>

                    <h2>Solving Solution Architecture Problems</h2>

                    <p>When working with my clients, I often hear:</p>

                    <ul>
                        <li>We have __multiple engineering teams__. They’re tasked with working on the same problem yet they don’t know it. We end up with multiple solutions costing us more money; then to make things worse, we have to maintain them all.</li>
                        <li>We don’t have a __consistent architecture__ that allows us to move quickly and efficiently. We haven’t established an engineering development process — software tooling, structure, behavior and good ci-cd process to bring it all together — that enables us to innovate and deliver what the business needs to compete.</li>
                        <li>Our __DevOps strategies__ need to be retooled. We want our development processes and staging servers to make production more reliable. We hear a lot about things like docker and kubernetes but don’t where to start.</li>
                        <li> __Security is always a top priority__ but we don’t know if we are spending too much or too little. (While we have a __code review process__, it’s apparent there isn’t a good balance between engineers and QA engineers.</li>
                        <li>We frequently onboard __new engineers__ but we waste valuable engineering while our top engineers do basic training. It would be great if we had a fast way to onboard new engineers without slowing down our engineering production.</li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default SolutionsArchitect