import React from "react";

function ModalHeader({ children, onClose }) {
  return (
    <div className="modal-header">
      <h5 className="modal-title">{children}</h5>
    </div>
  );
}

export default ModalHeader;
