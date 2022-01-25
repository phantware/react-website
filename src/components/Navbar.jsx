import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 50px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  font-weight: bold;
  text-decoration: underline crimson;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 25px;
  }
`
const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 2 0px;
  font-weight: bold;
  color: gray;
`
const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 10px;
  }
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Phantware</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>Join Today</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
