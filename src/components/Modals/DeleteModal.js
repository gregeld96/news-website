import { Col, Modal, Row } from "react-bootstrap";
import BaseButton from "../Buttons/BaseButton";
import CancelButton from "../Buttons/CancelButton";


function DeleteModal({open = true, selectedTitle, title, onCancel, progress, onDelete}) {
    return (
        <Modal centered show={open} contentClassName="text-center p-3">
            <p className="text-center fw-bolder">Delete {title} </p>
            <p>Are you sure want to delete this?</p>
            <p>{selectedTitle}</p>
            <Row style={{paddingTop: '15px'}}>
                <Col>
                    <BaseButton title={"Delete"} onClick={onDelete} submitting={progress} disabled={progress} />
                </Col>
                <Col>
                    <CancelButton title={"Cancel"} onClick={onCancel} submitting={progress} disabled={progress} />
                </Col>
            </Row>
        </Modal>
    )
}

export default DeleteModal;