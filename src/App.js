import logo from './logo.svg';
import tree from './tree.png'
import './App.css';
import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from'react-bootstrap/Card';
import AdventDay from './AdventDay';
import json from './adventJSON';

function setDays(json) {
  console.log(json.days[0]);
  let days = json.days;

// stole this from SCL Manager, is still gross and dumb but it works 
  const startDate =  new Date('Tues Dec 1 2020 00:00:01 GMT');
  let utcDay = new Date()
  let today = utcDay - new Date().getTimezoneOffset();
  let adventDay = (today - startDate) / 86400000;
  adventDay = parseInt(Math.ceil(adventDay), 10)

  if (adventDay >= 0) {
    for (let i = 0; i <= adventDay; i++ ) {
      days[i].active = true;
    }
  }
  return days;
};

function App() {
  let success = "success";
  let days = setDays(json);
  return (
    <div className="App">
      <header className="App-header">
        <img src={tree} className="App-logo" alt="logo" />
          <Container flex>
            <Row md={5} lg={5} sm={5}>
            {json.days.map(day => <AdventDay
              day={day.day}
              background={success}
              description={day.description}
              link={day.link}
              button={day.button}
              active={day.active}
              image={day.image}
              />)}
            </Row>
          </Container>
      </header>
    </div>
  );
}

export default App;
