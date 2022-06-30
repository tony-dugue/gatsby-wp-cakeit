import { useStaticQuery, graphql } from 'gatsby';

export const useCtaAreaQuery = () => {
  const data = useStaticQuery(graphql`
      
      fragment ctaImage on WpMediaItem {
          localFile {
              childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG, width: 720)
              }
          }
      }
      
      query CtaQuery {
          cta: wpPage(databaseId: {eq: 47}) {
              ACF_HomePage {
                  cta1Text
                  cta1Link
                  cta1Text
                  cta2Link
                  cta2Text
                  cta3Link
                  cta3Text
                  cta1Image {...ctaImage}
                  cta2Image {...ctaImage}
                  cta3Image {...ctaImage}
              }
          }
      }
  `)

  return data;
}
