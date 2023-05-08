import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Coffee = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:9000/coffee')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    },[])

    return (
        <Container className='mt-5 mb-5'>
            <Row>
                {
                    data.map(item => <Col key={item._id} md={6} className='mt-5'>
                        <div className='bg-light p-5' style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div>
                                <img src={item.photo} alt={item.name} />
                            </div>
                            <div>
                                <p style={{fontFamily: 'Raleway sansSerif'}}><b style={{fontFamily: 'Raleway sansSerif'}}>Name</b>{item.name}</p>
                                <p style={{fontFamily: 'Raleway sansSerif'}}><b style={{fontFamily: 'Raleway sansSerif'}}>Chef</b>{item.chef}</p>
                                <p style={{fontFamily: 'Raleway sansSerif'}}><b style={{fontFamily: 'Raleway sansSerif'}}>Price</b>8go Taka</p>
                            </div>
                            <div>
                                <p><button style={{background:'#D2B48C',border:'none',padding:'4px',borderRadius:'4px',color:'white'}}><i class="fa-sharp fa-regular fa-eye"></i></button></p>

                                <p><button style={{background:'#3C393B',border:'none',padding:'4px',borderRadius:'4px',color:'white'}}><i class="fa-solid fa-pen"></i></button></p>

                                <p><button style={{background:'#EA4744',border:'none',padding:'4px',borderRadius:'4px',color:'white'}}><i class="fa-sharp fa-solid fa-trash"></i></button></p>
                            </div>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Coffee;