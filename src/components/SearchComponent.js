import React, { useState } from 'react';
import fetchWeather from '../api';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

function Search() {
    const [location, setLocation] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (!location || location === '') return;
        fetchWeather(location);
    }
    return (
        <div id='video-bg'>
        <Container className='vertical-center'>
            <Form onSubmit={e => { handleSubmit(e) }}>
                <Row className='justify-content-center'>
                    <Col xs={10} sm={8} lg={6}>
                        <Label for='search' className='d-block text-center my-3 search-text'>Weather Search</Label>
                        <Input type='text' name='search' id='search' placeholder='Enter location' value={location} onChange={e => setLocation(e.target.value)} />
                    </Col>
                </Row>
                <Row className='my-4 justify-content-center'>
                    <Col xs={5} md={2} lg={2}>
                        <Input type='submit' value='Go' className='btn btn-primary' />
                    </Col>
                </Row>
            </Form>
        </Container>
        </div>
    )
}

export default Search;