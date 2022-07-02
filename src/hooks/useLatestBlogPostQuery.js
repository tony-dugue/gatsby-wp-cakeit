import { useStaticQuery, graphql } from 'gatsby';

export const useLatestBlogPostQuery = () => {
  const data = useStaticQuery(graphql`
      query LatestBlogPostQuery {
          allWpPost(sort: {fields: date, order: DESC}) {
              edges {
                  node {
                      excerpt
                      title
                      uri
                  }
              }
          }
      }
  `)

  return data;
}
