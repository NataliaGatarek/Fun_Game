import React, { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Modal className="modal_styles">Some Modal</Modal>
    </React.Fragment>
  );
}
export default Modal;
