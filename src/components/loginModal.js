import { useState } from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'
import { CustomerSignup } from './customerSignup';
import { CustomerLogin } from './customerLogin';

export const LoginModal = (props) => {

  const [registerShow, setRegisterShow] = useState(false)
  const [customerLoginShow, setCustomerLoginShow] = useState(false)

  let CustomerLoginModal = () => {
    setCustomerLoginShow(true)
    props.onHide()
  }

  let registerModal = () => {
    setRegisterShow(true)
    props.onHide()
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <h5 className="text-center w-100">ورود به عنوان:</h5>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="col-lg-6 m-auto">
              <Button className="w-100" onClick={CustomerLoginModal}>مشتری</Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="col-lg-6 m-auto">
              <Button className="w-100">فروشنده</Button>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-success" onClick={registerModal}>ثبت نام</Button>
          <Button className="btn-danger" onClick={props.onHide}>بستن</Button>
        </Modal.Footer>
      </Modal>

      <CustomerSignup show={registerShow} onHide={() => setRegisterShow(false)}/>
      <CustomerLogin show={customerLoginShow} onHide={() => setCustomerLoginShow(false)} />
    </>
  );
}