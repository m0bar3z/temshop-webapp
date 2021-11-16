import { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CustomerSignup = (props) => {
    const [inputs, setInputs] = useState({ username: '', password: '', dupPassword: '', mobile: '' })
    const { username, password, dupPassword, mobile } = inputs

    const handleChange = e => {
        const { id, value } = e.target
        setInputs({...inputs, [id]: value})
    }
    
    const formHandler = e => {
        e.preventDefault()

        let user = { username, password, mobile }

        username && password === dupPassword && mobile && 
            console.log('time for calling api') 
        console.log('form handler')
    }

    return (
        <>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header>
                    <h5 className="w-100 text-center">ثبت نام مشتریان:</h5>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formHandler}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label className="me-2">نام کاربری</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="نام کاربری خود را بدون فاصله وارد کنید" 
                                onChange={handleChange} 
                            />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label className="me-2">رمزعبور</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="رمز عبور باید حداقل ۵ کاراکتر باشد" 
                                        onChange={handleChange} 
                                    />
                                </Form.Group>
                            </Col>                        
                            <Col>
                                <Form.Group className="mb-3" controlId="dupPassword">
                                    <Form.Label className="me-2">تکرار رمز عبور</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="رمز عبور خود را دوباره وارد کنید" 
                                        onChange={handleChange} 
                                    />
                                </Form.Group>
                            </Col> 
                        </Row>

                        <Form.Group className="mb-4" controlId="mobile">
                            <Form.Label className="me-2">شماره همراه</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="09021234567" 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Button className="m-auto d-block w-25" variant="primary" type="submit">
                            ثبت نام
                        </Button>
                    </Form>
                    <Row className="mt-4">
                        <Col className="h6 text-center">
                            <Link to="/seller-introduction" target="_blank">چطوری فروشنده بشم؟</Link>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-danger" onClick={props.onHide}>بستن</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}