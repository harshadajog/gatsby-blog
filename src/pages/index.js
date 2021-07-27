import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"


import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`
const BlogBody = styled.div`
  margin-bottom: 50px;
`
const Title = styled.h1`
  display: inline-block;
`

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <Title>Thoughts by Harshada</Title>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
      
          <BlogBody key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} <span> — {node.frontmatter.date}</span>
              </BlogTitle>
            </BlogLink>
            <p>{node.frontmatter.description || node.excerpt}</p>
          </BlogBody>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        internal {
          content
          description
        }
        frontmatter{
          title
          date
        }
        html
        excerpt
        fields {
          slug
        }
      }
    }
  }
}
`
