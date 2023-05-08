import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Add = () => {
    const [data,setData]= useState([])

    useEffect(()=>{
        fetch('http://localhost:9000/icons')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return (
       <Container fluid className="bg-light pt-5 pb-5">
            <Container>
                <Row>
                    {
                        data.map(singleAdd => <Col md={3} key={singleAdd._id} className="p-3">
                            <div>
                                <img src={singleAdd.img} alt={singleAdd.title} />
                                <h5>{singleAdd.title}</h5>
                                <p>{singleAdd.description}</p>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
       </Container>
    );
};

export default Add;