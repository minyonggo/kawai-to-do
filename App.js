import React from 'react';
import {StatusBar, Dimensions} from 'react-native';
import styled from 'styled-components';

const {width, height} = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Header>
          <HeaderTitle>STAMPY CLOUD</HeaderTitle>
        </Header> 
        <Card>
          <ListTitle>New to Do</ListTitle>
        </Card>
      </Container>
    );
  }
}


const Container = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;

  background-color: rgb(6,190,182);
`;

const Header = styled.View`
  flex: 1;
  
  align-content: center;
  justify-content: center;
  
`;

const HeaderTitle = styled.Text`
  font-size: 40px; font-weight: 200;
  text-align: center;
`;

const ListTitle = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const Card = styled.View`
  flex: 3;
  width: ${width-20}px;
  padding: 30px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #D4F3EF;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;