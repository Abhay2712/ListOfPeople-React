import React from 'react'
import { Card } from 'react-bootstrap'

const Person = ({ person,handleClick }) => {
    return (
        <Card className='my-1'>
            <Card.Body>
                <Card.Title>{person.first_name}</Card.Title>
                <Card.Text>
                        <strong>
                            <button value={person.id}  className="btn btn-primary" 
                            onClick={()=>{
                                handleClick();
                            }}>
                                View Details
                            </button>

                        </strong>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Person

