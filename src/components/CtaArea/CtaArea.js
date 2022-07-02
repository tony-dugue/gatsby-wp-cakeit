import React from 'react'
import { useCtaAreaQuery } from '../../hooks/useCtaAreaQuery'
import { Wrapper } from './CtaArea.styles'
import Cta from "../Cta/Cta";

const CtaArea = () => {

  const { cta } = useCtaAreaQuery()

  return (
    <Wrapper>
      {new Array(3).fill("").map( (element, i) => (
        <Cta
          key={i}
          image={cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp.gatsbyImageData}
          link={cta.ACF_HomePage[`cta${i + 1}Link`]}
          text={cta.ACF_HomePage[`cta${i + 1}Text`]}
        />
      ))}
    </Wrapper>
  )
}

export default CtaArea
