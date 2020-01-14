## React At Scale - Getting Started 
Here's what I've done (in no particular order).

- Go to [Netlify](https://www.netlify.com/).
- Sign up with your GitHub.
- Select `New site from Git`.
- Pick react at scale.
- Make sure the `Build command` is set to `gatsby build`.
- While it's building go into `Domain Settings`>`Build and Deploy`, scroll down to Environment, and add `PRODUCTION` which will be set to `true`.
- Also set `GATSBY_DISQUS_NAME` to the site exact name you have on Disqus. 
- Go back to `Deploy`, hit `Trigger Deploy`, and `Deploy Site` to re-trigger it with the new variables.
- When it's done building you have a link at the top of the page :). 
