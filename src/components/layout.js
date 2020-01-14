import React, { useState } from "react"

// * Components
import Header from './header/header'
import Footer from './footer/footer'
import { withPlugin } from 'tinacms'
import { createRemarkButton } from 'gatsby-tinacms-remark'
import slugify from 'react-slugify'
import { Waypoint } from 'react-waypoint'

// * Styles
import '../global.sass'

const Layout = ({ children }) => {
  const [lightNav, setNav] = useState(true)
  return (
    <div>
      <Header lightNav={lightNav} setNav={setNav} />
      {/*//* Change Headers bg color when crosses banner */}
      <Waypoint
        onEnter={() => setNav(true)}
        onLeave={() => setNav(false)}
        bottomOffset='1400px'
        className='banner'
      />
      {children}
      <Footer />
    </div>
  )
}

const CreatePostButton = createRemarkButton({
  label: "New Post",
  filename(form) {
    let slug = slugify(form.title.toLowerCase())
    return `src/posts/${slug}.md`
  },
  frontmatter(form) {
    let slug = slugify(form.title.toLowerCase())
    return new Promise(resolve => {
      resolve({
        title: form.title,
        description: form.description,
        postDate: form.postDate,
        type: "post",
        path: `src/posts/${slug}`,
      })
    })
  },
  fields: [
    { name: "title", label: "Title", component: "text", required: true },
    { name: "description", label: "Description", component: "text", required: true },
    { name: "postDate", label: "Posted Date", component: "text", required: true },
  ],
})

export default withPlugin(Layout, CreatePostButton)
