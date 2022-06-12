import React from 'react'
import { Image, Card, Container } from 'react-bootstrap'


const PersonDetails = ({ person }) => {
    return (
        <>
            <Container >
                <h1>Selected Person ID: {person.id}</h1>
                <h2>Person Details</h2>

                <Card className='my-3 p-3'>
                    <div>
                        <Image src={person.avatar} className='rounded-circle ' style={{ width: '200px' }} />
                    </div>
                    <Card.Body>
                        <Card.Title>{person.first_name} {person.last_name}</Card.Title>
                        <Card.Text>
                            {person.email}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Container>


        </>
    );
}

export default PersonDetails;

