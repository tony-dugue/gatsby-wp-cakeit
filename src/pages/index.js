import * as React from "react"
import Seo from "../components/SEO/SEO"
import Layout from '../components/Layout/Layout'
import Hero from "../components/Hero/Hero";
import CtaArea from "../components/CtaArea/CtaArea";
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CtaArea />
    <LatestBlogPost />
  </Layout>
)

export default IndexPage

