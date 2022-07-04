import React from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout/Layout'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'

import {ContentWrapper, StyledDate, StyledH2, StyledReadMore, Wrapper} from "./archive.styles";
import ArchiveSidebar from "../components/ArchiveSidebar/ArchiveSidebar";

const archiveTemplate = ({
  data: { allWpPost },
  pageContext: { catId, catName, catUri, categories, numPages, currentPage }
}) => (
  <Layout>
      <StaticImage
        src="../images/archive_headerimage.png"
        placeholder="TRACED_SVG"
        width={1920}
        height={300}
        alt="Archive Hero"
      />

      <Wrapper>
        <BreadCrumb parent={{ uri: "/blog/all-posts", title: "Blog" }}/>

        <ContentWrapper>
          <ArchiveSidebar catId={catId} categories={categories.edges} />

          <pageContent>
            <h1 dangerouslySetInnerHTML={{ __html: catName }} />

            {allWpPost.edges.map( post => (
              <article key={post.node.id} className="entry-content">
                <Link to={`/blog${post.node.uri}`}>
                  <StyledH2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                </Link>
                <StyledDate dangerouslySetInnerHTML={{ __html: post.node.date }} />
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                <StyledReadMore to={`/blog${post.node.uri}`}>Read more</StyledReadMore>
                <div className="dot-divider" />
              </article>
            ))}
          </pageContent>
        </ContentWrapper>
      </Wrapper>
  </Layout>
)

export default archiveTemplate

export const pageQuery = graphql`
    query($catId: String!, $skip: Int!, $limit: Int!) {
        allWpPost(
            filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } }}}}
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    id
                    title
                    excerpt
                    uri
                    slug
                    date(formatString: "DD MM YYYY")
                }
            }
        }
    }
`
