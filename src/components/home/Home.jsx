import React from 'react';
import "./home.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Home = ({ props }) => {
    return (
        <div>
            <Card style={{ margin: '2rem 0', height: '32rem', width: '20rem' }}>
                <div className="swirling-circle">
                        <Card.Img className='circle' variant="top" src={props.profile} alt="profile picture" />
                </div>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Umur: {props.age}</ListGroup.Item>
                    <ListGroup.Item>NIM: {props.nim}</ListGroup.Item>
                    <ListGroup.Item>Email: {props.email}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <button type="button" class="btn btn-success">
                        <Card.Link target="_blank" href={props.link} style={{
                            all: "unset"
                        }}>Github</Card.Link>
                    </button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home