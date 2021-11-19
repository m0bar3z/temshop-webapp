import { useState, useEffect } from 'react'
import { Row, Toast, Col } from 'react-bootstrap'

export const AlertToast = props => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(props.show)
    }, [props.show])

    return (
        <Row >
            <Col style={{ zIndex: "99999999999" }} xs={6}>
            <Toast onClose={() => setShow(false)} show={show} delay={1500} position={'middle-end'} autohide>
                <Toast.Header>
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
            </Col>
      </Row>
    )
}