import { Modal, Button, Form, Row, Col, Alert } from "react-bootstrap"
import { useState } from "react"

export const CustomerLogin = props => {
    const [validated, setValidated] = useState(false)
    const [inputs, setInputs] = useState({ username: '', password: '' })
    const { username, password } = inputs
 
    const passwordHandler = value => {
        let hasMinLength =  value.length > 4 ? value : false

        return hasMinLength ? value : ''
    }

    const usernameHandler = value => {
        let hasSpace = /\s/g.test(value)
        let hasMinLength = value.length > 3 ? true : false
        return (!hasSpace && hasMinLength) ? value : ''
    }

    let handleChange = e => {
        let { value, id } = e.target
        
        if(id === "username")
            value = usernameHandler(value)
        if(id === "password")
            value = passwordHandler(value)

        setInputs({...inputs, [id]: value})
    }
 
    const formHandler = e => {
        e.preventDefault()
        username && password
        ? console.log('time for API calling')
        : setValidated(true) 

    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title className="w-100 text-center h5" id="contained-modal-title-vcenter">
                    ورود مشتری
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate onSubmit={formHandler}>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label className="me-2">نام کاربری</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="نام کاربری خود را وارد کنید"
                            onChange={handleChange}
                            isValid={validated && username}
                            isInvalid={validated && !username}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="password">
                        <Form.Label className="me-2">رمز عبور</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="رمز عبور خود را وارد کنید"
                            onChange={handleChange}
                            isValid={validated && password}
                            isInvalid={validated && !password}
                            required
                        />
                    </Form.Group>
                    <Button className="w-50 m-auto d-block" variant="success" type="submit">
                        ورود
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>بستن</Button>
            </Modal.Footer>
        </Modal>
    )
}