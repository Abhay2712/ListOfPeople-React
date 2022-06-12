import React from "react";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

const App= () => {
    return (
        <Container  className="text-center">
            <HomeScreen/>
        </Container>
    );
}

export default App;
