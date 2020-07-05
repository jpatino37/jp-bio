import React from 'react'
import styled from 'styled-components'
import heroImage from '../images/heroImage.jpg'

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 700px;
  overflow: hidden;
`

const HeroImg = styled.img`
  width: 100%;
  position: relative;
`

const TextContainer = styled.div`
  color: white;
  position: absolute;
  font-family: 'Cairo', sans-serif;
  margin: 0px 60px;
  max-width: 400px;
`

const Header = styled.h1`
  margin: 0;
`

const HeroImage = () => (
  <Container>
    <HeroImg src={heroImage} alt="hero img" />
    <TextContainer>
      <Header>
        Chambeando
        <span style={{ fontSize: '16px' }}> [ cheym-be-an-doh ]</span>
      </Header>
      <p style={{ marginTop: '2px' }}>(adj.) Spanish slang for working</p>
      <p style={{ fontSize: '22px' }}>
        My name is Jose Patino and I have been a software developer for 3 years.
        If you have an idea for a website or are in need of a website for your
        business, put me to &quot;chambear&quot; for you. Im sure that with a little hard
        work your idea can become a reality.
      </p>
    </TextContainer>
  </Container>
)

export default HeroImage
