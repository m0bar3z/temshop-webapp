import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sellerActions } from '../actions'

export const SellerLogin = props => {

    const [validated, setValidated] = useState(false)
    const [inputs, setInputs] = useState({ username: '', password: '' })
    const { username, password } = inputs
    const dispatch = useDispatch()

    let alert = useSelector(state => state.alert)

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
        ? dispatch(sellerActions.login(inputs))
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
                    ورود فروشنده
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
                {
                    alert.message &&
                    <Alert className="m-auto w-75 text-center" variant={alert.type}>
                        {alert.message}
                    </Alert> 
                }
                <Button variant="danger" onClick={props.onHide}>بستن</Button>
            </Modal.Footer>
        </Modal>
    )
}