import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import MovementForm from "./MovementForm";
import React, { useState } from "react";

function FormModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add new Movement
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MovementForm />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FormModal;
