import tree from './tree.png'
import './App.css';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AdventDay from './AdventDay';
import json from './adventJSON';

function setDays(json) {
  let days = json.days;

// stole this from SCL Manager, is still gross and dumb but it works 
  const startDate = new Date('Tues Dec 1 2020 00:00:01 GMT');
  let utcDay = new Date()
  let today = utcDay - new Date().getTimezoneOffset();
  let adventDay = (today - startDate) / 86400000;
  adventDay = parseInt(Math.ceil(adventDay), 10)

  if (adventDay >= 0) {
    for (let i = 0; i <= adventDay && i <= 24; i++ ) {
      days[i].active = true;
    }
  }
  return days;
};

function App() {
  setDays(json);
  return (
    <div className="App flex">
      <header className="App-header">
      <a href="https://www.youtube.com/watch?v=RTs5eKZ0i1E" target="_blank" rel="noreferrer" className="arrow">
        <img src={tree} className="App-logo" alt="logo" /></a>
          <Container flex>
            <Row md={5} lg={5} sm={3} xs={3}>
            {json.days.map(day => <AdventDay
              day={day.day}
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
