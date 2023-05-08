import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AddNewCoffee = () => {
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
        fetch('http://localhost:9000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('new icon created')
                // e.target.reset()
            }
            
        })
    }
    return (
        <Container>
            <Row>
                <Col md={6} className='mx-auto'>
                <form onSubmit={onSubmitHandeler} className='mt-5'>
                <h3 style={{color:'gray'}}>Add New Coffee</h3>
                        <div style={{display:'flex',gap:'20px'}}>
                            <input onChange={onChangeHandeler} name='name' type="text" className='form-control mt-3 p-2' placeholder='Name' />

                            <input onChange={onChangeHandeler} name='chef' type="text" className='form-control mt-3 p-2' placeholder='Chef' />
                        </div>

                        <div style={{display:'flex',gap:'20px'}}>
                            <input onChange={onChangeHandeler} name='supplier' type="text" className='form-control mt-3 p-2' placeholder='Supplier' />

                            <input onChange={onChangeHandeler} name='taste' type="text" className='form-control mt-3 p-2' placeholder='Taste' />
                        </div>

                        <div style={{display:'flex',gap:'20px'}}>
                            <input onChange={onChangeHandeler} name='category' type="text" className='form-control mt-3 p-2' placeholder='Category' />

                            <input onChange={onChangeHandeler} name='photo' type="text" className='form-control mt-3 p-2' placeholder='Photo' />
                        </div>

                        <div style={{display:'flex',gap:'20px'}}>
                            <textarea rows={5} onChange={onChangeHandeler} name='details' type="text" className='form-control mt-3 p-2' placeholder='Details' />
                        </div>

                        
                        <div className='text-center'><button type='submit' className='w-50 customButton'>Create New Icon</button></div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddNewCoffee;