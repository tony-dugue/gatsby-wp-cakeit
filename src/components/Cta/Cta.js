import React from 'React'
import { Link } from 'gatsby'
import { StyledImg, CtaImage, CtaImageTextWrapper, CtaImageText } from "./Cta.styles";

const Cta = ({ image, link, text }) => (
  <CtaImage>
    <StyledImg image={image} alt="CTA Image" />
    <Link to={link}>
      <CtaImageTextWrapper>
        <CtaImageText>{text}</CtaImageText>
      </CtaImageTextWrapper>
    </Link>
  </CtaImage>
)

export default Cta
