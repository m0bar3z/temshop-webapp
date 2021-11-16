import { Modal, Button, Row, Col } from 'react-bootstrap'

export const LoginModal = (props) => {
   
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header >
            <h6 className="text-center w-100">ورود به عنوان:</h6>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col className="col-lg-6 m-auto">
                <Button className="w-100">مشتری</Button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="col-lg-6 m-auto">
                <Button className="w-100">فروشنده</Button>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-danger" onClick={props.onHide}>بستن</Button>
          </Modal.Footer>
        </Modal>
      );
}