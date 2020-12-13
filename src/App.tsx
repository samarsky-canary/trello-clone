import React from 'react';
import {AppContainer} from './styles';
import {Column} from './Column';
import {Card} from './Card';

function App() {
  return (
    <AppContainer>
      <Column text={'Column name'}>
        <Card title={'card 1'}></Card>
        <Card title={'card 2'}></Card>
      </Column>
      <Column text={'Second column'}>
        <Card title={'card 1'}></Card>
        <Card title={'card 2'}></Card>
      </Column>
      <Column text={'Third column'}>
        <Card title={'card 1'}></Card>
        <Card title={'card 2'}></Card>
        <Card title={'card 3'}></Card>
      </Column>
    </AppContainer>
  );
}

export default App;
