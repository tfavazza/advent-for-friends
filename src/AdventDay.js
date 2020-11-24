import treelogo from './treelogo.svg';
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

// todo clicky box that disappears 

function AdventDay(props) {
	return(
			<Card 
				bg={props.active ? 'success' : 'disabled'}
			>
				<Card.Img variant="top" src={props.active ? props.image : treelogo} />
	          		<Card.Body>
	            		<Card.Title>{`Day ${props.day}`}</Card.Title>
	              		<Card.Subtitle className="mb-2 text-muted">
	              			{props.active ? props.description : `Coming Soon!`}
	              		</Card.Subtitle>
	            		<Button 
	            			disabled={!props.active}
	            			href={props.link}
	            			target="_blank"
	            			variant={props.active ? props.info : 'outline-info'}>
	            			{props.active ? props.button : "SOON"}
	            		</Button>
	          		</Card.Body>
	        	</Card>
)
}
export default AdventDay;