import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

// * Components 
import Layout from '../components/layout'
import Banner from '../components/banner/banner'
import Head from '../components/head'

// * Styles 
import '../styles/index.sass'

const Index = () => {
  const data = useStaticQuery(graphql`
  query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}, limit: 3) {
          edges {
              node {
                  fields {
                      slug
                  }
                  frontmatter {
                      title
                      description
                      postDate
                  }
                  timeToRead
              }
          }
      }
  }`)


  const posts = data.allMarkdownRemark
  return (
    <Layout>
      <Head title={'Home'} />
      <Banner />

      <div className="center">
        <div className="featured">
          <div className="card">
            <img className='icon' src="../illustrations/solutions.jpg" alt="Solutions Architecture" />
            <div className="title">
              <h2>Solutions</h2>
              <h2>Architecture</h2>
            </div>
            <div className="desc">
              <p>Creating Structure &</p>
              <p>Consistency</p>
            </div>
            <Link to='/posts/solutions-architecture'><button className='more-btn'>Learn More</button></Link>
          </div>

          <div className="card">
            <img className='icon' src="../illustrations/migration.jpg" alt="Migration Strategies" />
            <h2 className='title'>Migration Strategies</h2>
            <p className='desc'>Bridging Legacy Systems</p>
            <Link to='/posts/migration-strategies'><button className='more-btn'>Learn More</button></Link>
          </div>

          <div className="card">
            <img className='icon' src="../illustrations/cto-advisor.jpg" alt="CTO Advisor" />
            <h2 className='title'>CTO Advisor</h2>
            <p className='desc'>Translating Truth from Hype</p>
            <Link to='/posts/cto-advisor'><button className='more-btn'>Learn More</button></Link>
          </div>
        </div>
      </div>

      <div className="center">
        <div className="content">
          <h2>Been there, done that, happy to help you do it!</h2>
          <h4 className='intro'>I totally get it. You've got your current web site in a technology that's good but not great. Everyone's talking about SPA's, Serverless, Server-side, TypeScript and more. Let me help you devise a plan, and help you execute so that you are getting the best bang for your web site dollars. </h4>

          <h2>Specifically, I can help with:</h2>
          <ul>
            <li><strong>Making a Plan.</strong>  This is the most important part. I'll work with you to figure out what you've got, what can be re-used and what needs to be re-written. We'll make time estimates and give you a real idea of where you stand. </li>
            <li><strong>Help Train Your Staff.</strong> Let me help get your staff up to speed with what they need to know. Lots of consultants love to come in and become a forever part of your team.  Not me. I want to get in, get out and leave you in a much better place. </li>
            <li><strong>Code Quality.</strong> I'm hard wired to build quality code. Let me help you get your team hardwired the same way.  Testing enough (testing too much?), Using TypeScript (maybe you should, maybe you should not), are you using your version control well? branching strategies? How about coding documentation. These days it's amazing easy to build docs that not only help you maintain your information for posterity (OK, not that useful) but let's your team use it for reference. Let me show you how to make that a part of your culture. </li>
            <li><strong>Deployment Strategy.</strong> Do you have a great continuous build and deploy process in place? Source control directly to production? If not, I can help. Nothing makes me happier then to check into a production branch and then 30 minutes later, after all testing passes, the web site is live and in production with the latest update. </li>
            <li><strong>On-boarding New Staff.</strong> Let me help you with a plan for this. It's never free to teach your new engineers, but it can be a lot cheaper and better than it probably is. </li>
          </ul>

          <h2>Notable Accomplishments</h2>
          <ul>
            <li><strong>Pluralsight Author</strong> <br />
              Authored nine Pluralsight courses for developers. Topics include React, ASP.NET Core and Security.
          </li>
            <li><strong>Microsoft Documentation Author</strong> <br />
              Wrote many pages of Microsoft's official documentation for ASP.NET Core.
          </li>
            <li><strong>Microsoft ASPInsider</strong> <br />
              <a href="https://aspinsiders.com/" target="_blank" rel="noreferrer">The ASPInsiders</a> is a select group of international professionals who have a demonstrated expertise in ASP.NET technologies and who provide valuable, early feedback on related developing technologies and publications to their peers, the Microsoft ASP.NET team, and others.
          </li>
            <li><strong>Microsoft MVP</strong> <br />
              This award is given by Microsoft to "technology experts who passionately share their knowledge with the community, award years 2007-2018
          </li>
            <li><strong>Conference Founder Including Silicon Valley Code Camp and AngularU</strong> <br />
              Established Silicon Valley Code Camp in 2006 whose mission is to provide the highest quality content built around the topic of computer code. Code Camp draws thousands of attendees year after year with top sponsorship from Silicon Valley's companies including Microsoft, IBM, Google, PayPal, Twilio and others. This annual event creates an environment to network and share knowledge.
          </li>
          </ul>

          <h2>What Others Say</h2>
          <div className="reviews">

            <p className="review">“As CEO of VisionCare, Inc., I contracted with Peter Kellner to replace our aging PIC-based computer system, so we could continue working into the Year 2000. Our company depends on the computer system for millions of dollars in annual claims processing, broker payments, and physician payments as well as many other critical functions. Peter and his team were great at communicating issues as they came up, resolving them, and, most importantly, delivering a properly working system on schedule. We had a team of six QA people verify that everything converted perfectly, and the new programs worked exactly as specified. I can’t say it is ever a pleasure to change computer systems, but it was a pleasure working with Peter and his team!”
          <br />— Howard Braverman, O.D., CEO, VCI</p>

            <p className="review">“Peter is a very passionate person. His knowledge of AngularJS is beyond comparison.”
          <br /> — Caro Waelens, RFID and Data Analyst</p>

            <p className="review">“Peter delivers complex product solutions on time and on budget. He achieves this through a well rounded, insightful business perspective coupled with impressive technical depth and breadth. Even when we were faced with the most difficult of challenges, Peter was a resourceful problem solver with far-reaching connections into Microsoft and many open source projects. I believe his most unique ability is to utilize technology to solve real customer problems, not just for technology’s sake. Peter will be a strong asset to any team.”
          <br />  — Todd Berger, COO, Transportation Solutions Group</p>
          </div>
        </div>
      </div>

      <div className="center bt">
        <div className="latest-posts">
          <h1>Latest Blog Posts</h1>
          <div className="posts">
            {posts.edges.map((post, i) => {
              const p = post.node
              const pf = p.frontmatter

              return <div className="post" key={i}>
                <Link to={'/posts/' + p.fields.slug}>
                  <h2 className='post-title'>{pf.title}</h2>
                  {pf.description && <h4 className='post-description'>{pf.description}</h4>}
                </Link>

                {pf.author && <h4 className='posted-info'>Posted by {pf.author} on {pf.postDate} · {p.timeToRead} mins read</h4>}
              </div>
            })}
          </div>
          <Link to='/posts' className="all-posts-btn"><button>View All Posts</button></Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index
