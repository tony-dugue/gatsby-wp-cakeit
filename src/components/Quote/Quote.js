import React from 'react'
import { useQuoteQuery } from '../../hooks/useQuoteQuery'
import QuoteImg from '../../images/quote.svg'
import { Wrapper, Content } from './Quote.styles'

const Quote = () => {

  const data = useQuoteQuery()

  const quoteText = data.wpPage.ACF_HomePage.citat1Text
  const quoteAuthor = data.wpPage.ACF_HomePage.citat1Author

  return (
    <Wrapper>
      <Content>
        <img src={QuoteImg} alt="quote" />
        <h6>{quoteText}</h6>
        <p>{quoteAuthor}</p>
      </Content>
    </Wrapper>
  )
}

export default Quote

