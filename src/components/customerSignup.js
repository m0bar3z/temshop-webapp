import { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { customerActions } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

export const CustomerSignup = (props) => {
    const [inputs, setInputs] = useState({ username: '', password: '', dupPassword: '', mobile: '' })
    const [validated, setValidated] = useState(false)
    const { username, password, dupPassword, mobile } = inputs
    let dispatch = useDispatch()
    let test = useSelector(state => state)

    const mobileHandler = value => {
        value = value.trim()
        let res = value.length === 11 && value[0] === "0" && value[1] === "9"
        let hasSpace = /\s/g.test(value)
        return (res && !hasSpace) ? value : ''
    }

    const passwordHandler = value => {
        let hasMinLength = value.length > 4 ? value : false

        return hasMinLength ? value : ''
    }

    const usernameHandler = value => {
        let hasSpace = /\s/g.test(value)
        let hasMinLength = value.length > 3 ? true : false
        return (!hasSpace && hasMinLength) ? value : ''
    }

    const handleChange = e => {
       let { id, value } = e.target

        if(id === "username")
            value = usernameHandler(value)
        if(id === "password" || id === "dupPassword")
            value = passwordHandler(value)
        if(id === "mobile")
            value = mobileHandler(value)
            
        
        setInputs({...inputs, [id]: value})
    }
    
    const formHandler = e => {
        e.preventDefault()

        let user = { username, password, mobile }
        console.log(inputs)

        username && password === dupPassword && mobile 
        ? dispatch(customerActions.register(user))
        : setValidated(true)
        
    }

    return (
        <>
        {console.log('this is useSelector: >>')}
        {console.log(test)}
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
                    <Form noValidate onSubmit={formHandler}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label className="me-2">نام کاربری</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="نام کاربری خود را بدون فاصله وارد کنید" 
                                onChange={handleChange} 
                                isInvalid={!username && validated && true}
                                isValid={username && validated && true} 
                                required
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
                                        isInvalid = {!password && validated && true}
                                        isValid = {password && validated && true}
                                        required
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
                                        isValid = {password === dupPassword && dupPassword.length && validated && true}
                                        isInvalid = {password !== dupPassword && validated && true}
                                        required
                                    />
                                </Form.Group>
                            </Col> 
                        </Row>

                        <Form.Group className="mb-4" controlId="mobile">
                            <Form.Label className="me-2">شماره همراه</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="مثال: 09021234567" 
                                onChange={handleChange}
                                isValid = {mobile && validated && true}
                                isInvalid = {!mobile && validated && true} 
                                required
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