import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalError = ({ history, show_modal_error, msg }) => {
  return (
    <Modal show={show_modal_error} centered>
      <Modal.Body>{msg}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => history.push("/")}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalError;
