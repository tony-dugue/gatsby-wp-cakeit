import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout/Layout'
import PageHero from "../components/PageHero/PageHero";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";

const PageTemplate = ({ data }) => (
  <Layout>

    { data.wpPage.featuredImage ? (
      <PageHero img={data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
    ) : null }

    <Wrapper>
      <BreadCrumb parent={data.wpPage.wpParent && data.wpPage.wpParent.node} />
      <p>Sidebar</p>
      <p>Content</p>
    </Wrapper>
  </Layout>
)

export default PageTemplate

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: block;
  
  @media (min-width: 992px) {
    display: flex;
  }
`

const PageContent = styled.article`
  margin-top: 20px;
`

export const pageQuery = graphql`
    query($id: String!) {
        wpPage(id: {eq: $id}) {
            id
            title
            content
            status
            featuredImage {
                node {
                    id
                    localFile {
                        childImageSharp {
                            gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
                        }
                    }
                }
            }
            wpChildren {
                nodes {
                    ... on WpPage {
                        id
                        uri
                        title
                    }
                }
            }
            wpParent {
                node {
                    ... on WpPage {
                        id
                        uri
                        title
                        wpChildren {
                            nodes {
                                ... on WpPage {
                                    id
                                    title
                                    uri
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
