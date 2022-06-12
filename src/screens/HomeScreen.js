import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Person from "../components/Person";
import Loader from "../components/Loader";
import { listPersons } from "../actions/personActions";
import PersonDetails from "../components/PersonDetails";

const HomeScreen = () => {
    const [id, setId] = useState(0);

    function handleClick(event, num) {
        setId(num);
      }
    
    const dispatch = useDispatch();
    const personList = useSelector(state => state.personList);
    const { loading, persons,error } = personList;

    useEffect(() => {
        dispatch(listPersons());
    }, [dispatch]);

    return (
        <>
            <h1>List of Persons</h1>
            {loading ? (<Loader/>) : error ? (<p>{error}</p>) : (
                <Row>
                    {persons.map((person) => (
                        <Col key={person.id} sm={6} md={6} lg={4} xl={2}>
                            <Person handleClick={event => handleClick(event, person.id)} person={person} />
                        </Col>
                    ))}
                </Row>
            )}
            {id > 0 ? (<PersonDetails person={persons.find((p)=>p.id===id)} />) : (<h2>Select a person to see their details</h2>)}
        </>
    );
}

export default HomeScreen;