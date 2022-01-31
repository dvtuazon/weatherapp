import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

function Search({ search, setSearch, setLocation }) {
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        if (!search || search === '') return;
        setLocation(search);
        navigate('/weather');
    }
    return (
        <>
            <Container className='container-search vertical-center'>
                <Form onSubmit={e => { handleSubmit(e) }}>
                    <Row className='justify-content-center'>
                        <Col xs={5} sm={8} lg={6}>
                            <Label for='search' className='d-block text-center my-3 search-text'>Weather Search</Label>
                            <Input type='text' name='search' id='search' placeholder='Enter location' value={search} onChange={e => setSearch(e.target.value)} />
                        </Col>
                    </Row>
                    <Row className='my-4 justify-content-center'>
                        <Col xs={2}>
                            <Input type='submit' value='Go' className='btn btn-primary' />
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default Search;