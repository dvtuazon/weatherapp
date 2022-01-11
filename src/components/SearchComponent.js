import React, { useState } from 'react';
import getWeather from '../api';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

function Search() {
    const [city, setCity] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(city);
        getWeather(city);
    }
    return (
        <Container className='center'>
            <Form onSubmit={e => { handleSubmit(e) }}>
                <Row className='justify-content-center'>
                    <Col xs={10} sm={8} lg={6}>
                        <Label for='search' className='d-block text-center my-3'>Weather Search</Label>
                        <Input type='text' name='search' id='search' placeholder='Enter name of city' value={city} onChange={e => setCity(e.target.value)} />
                    </Col>
                </Row>
                <Row className='my-4 justify-content-center'>
                    <Col xs={5} md={2} lg={2}>
                        <Input type='submit' value='Go' />
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Search;