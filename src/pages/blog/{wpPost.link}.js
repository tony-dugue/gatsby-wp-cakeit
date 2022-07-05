import React from 'React'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/Layout/Layout'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'

const PostTemplate = () => (
  <Layout>
    <Wrapper>
      <BreadCrumb parent={{ uri: '/blog/all-posts', title: 'blog' }} />
      <ContentWrapper>
        Sidebar goes here
        <PostContent>
          <h1>Header here</h1>
          <div>Content here</div>
        </PostContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default PostTemplate

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

const PostContent = styled.article`
  margin-top: 20px;
`