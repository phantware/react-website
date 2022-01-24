import React from 'react'
import styled from 'styled-components'
import woman from '../img/woman-3.jpg'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  width: 60%;
  font-size: 60px;
`
const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`
const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`
const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: contain;
`
const Desc = styled.p`
  width: 60%;
  margin-top: 20px;
  font-size: 20px;
`

const Right = styled.div`
  width: 40%;
`
const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odio
          excepturi officia consequuntur quidem expedita omnis recusandae, eaque
          autem quisquam.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us (+234) 8187 - 273154 </Phone>
            <ContactText>For any questions or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  )
}

export default Intro
