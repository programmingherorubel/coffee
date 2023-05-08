import React, { useState } from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import {  toast } from 'react-hot-toast';

const CreateIcon = () => {
    const [update,setUpdate] = useState({})
    const onChangeHandeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value;
        setUpdate(newValue)
    }


    const onSubmitHandeler = e =>{
        e.preventDefault()
        fetch('http://localhost:9000/icons',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('new icon created')
                alert('new icon created')
                e.target.reset()
            }
            
        })
    }
    return (
        <Container>
            <Row className='mt-5'>
                <Col md={6} className="mx-auto">
                    <h3 style={{color:'gray'}}>Create Icon Section</h3>
                    <form onSubmit={onSubmitHandeler} className='mt-5'>
                        <input onChange={onChangeHandeler} name='img' type="text" className='form-control mt-3 p-3' placeholder='Img url' />

                        <input onChange={onChangeHandeler} name='title' type="text" className='form-control mt-3 p-3' placeholder='title' />

                        <input onChange={onChangeHandeler} name='description' type="text" className='form-control mt-3 p-3' placeholder='description' />
                        <div className='text-center'><button className='w-50 customButton'>Create New Icon</button></div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateIcon;