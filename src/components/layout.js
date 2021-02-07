import React from "react"
import { Link } from "gatsby"
import { liveRemarkForm } from 'gatsby-tinacms-remark';
import { Wysiwyg } from '@tinacms/fields';
import { TinaField } from '@tinacms/form-builder';
import { withPlugin } from 'tinacms';
import { createRemarkButton } from 'gatsby-tinacms-remark';
import slugify from 'react-slugify';


const CreatePostButton = createRemarkButton({
  label: "New Post",
  filename(form) {
    let slug = slugify(form.title.toLowerCase())
    return `content/blog/${slug}/${slug}.md`
  },
  frontmatter(form) {
    let slug = slugify(form.title.toLowerCase())
    return new Promise(resolve => {
      resolve({
        title: form.title,
        description: form.description,
        data: new Date(),
        path: `content/blog/${slug}/${slug}`,
      })
    })
  },
  fields: [
    { name: "title", label: "Title", component: "text", required: true },
    { name: "description", label: "Description", component: "text", required: true },
  ],
});

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}


const BlogPostTemplate = props => {
  const { previous, next } = props.pageContext;

  return (
    <Layout>
        {}
      <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
        <article onClick={() => props.setIsEditing(true)}>
            {}
        </article>
      </TinaField>
    </Layout>
  )
};

export default withPlugin(Layout, CreatePostButton);