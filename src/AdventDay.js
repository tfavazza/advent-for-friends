import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from'react-bootstrap/Card';

// todo clicky box that disappears 

function AdventDay(props) {
	return(
			<Card 
				bg={props.active ? 'success' : 'dark'}
			><Card.Header>{props.active ? props.image : "????"}</Card.Header>
	          		<Card.Body>
	            		<Card.Title>{`Day ${props.day}`}</Card.Title>
	              		<Card.Subtitle className={`mb-2 ${!props.active ? "text-muted" : ""}`}>
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