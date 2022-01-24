import React from 'react'
import styled from 'styled-components'
import Phone from '../img/app.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  width: 50%;
`
const Image = styled.img`
  width: 80%;
`

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`
const Title = styled.span`
  font-size: 70px;
`
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
`
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`

const Features = () => {
  return (
    <Container>
      <Left>
        <Image src={Phone} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br /> <b>good</b> business
        </Title>
        <SubTitle>We know that good design means good business</SubTitle>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure
          ratione error est voluptatem, delectus veritatis et iusto harum
          similique!
        </Desc>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure
          ratione error est voluptatem, delectus veritatis et iusto harum
          similique!
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  )
}

export default Features
