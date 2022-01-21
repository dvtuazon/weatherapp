import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './SearchComponent';
import { Container, Row } from 'reactstrap';

function Error() {
    return(
        <Container>
            <Row>
                <h1>Page Not Found</h1>
            </Row>
        </Container>
    )
}

export default Error;