import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './SearchComponent';
import { Container, Row } from 'reactstrap';

function Error() {
    return(
        <Container>
            <Row>
                <h1>Error! This page does not exist!</h1>
            </Row>
        </Container>
    )
}

export default Error;