import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import { Transition } from "react-transition-group";
import ModalDialog from "./ModalDialog";
import ModalHeader from "./ModalHeader";

class Modal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool
  };

  static defaultProps = {
    isOpen: false,
    onClose: () => {},
    role: "dialog"
  };

  modal = React.createRef();

  getSnapshotBeforeUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      return true;
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      this.modal.current.focus();
    }
  }

  onModalEnter = () => {
    document.body.classList.toggle("modal-open");
    // document.addEventListener("focusin", this.enforceFocus, true);
  };

  onModalExited = () => {
    document.body.classList.toggle("modal-open");
    document.removeEventListener("focusin", this.enforceFocus, true);
  };

  // enforceFocus = event => {
  // if (
  //   document !== event.target &&
  //   this.modal.current !== event.target &&
  //   !this.modal.current.contains(event.target)
  // ) {
  //   this.modal.current.focus();
  // }
  // };

  render() {
    const { children, isOpen, onClose, role, title } = this.props;
    const ariaLabel = this.props.ariaLabel || title;

    return ReactDOM.createPortal(
      <Transition
        appear
        unmountOnExit
        in={isOpen}
        timeout={150}
        onEnter={this.onModalEnter}
        onExited={this.onModalExited}
      >
        {state => (
          <React.Fragment>
            <div
              ref={state !== "unmounted" && this.modal}
              className={`modal fade ${state === "entered" ? "show" : ""}`}
              tabIndex="-1"
              role={role}
              aria-modal="true"
              aria-label={ariaLabel}
              style={{ display: "block", paddingRight: 15 }}
            >
              <ModalDialog onClickOut={onClose}>
                <ModalHeader onClose={onClose}>{title}</ModalHeader>
                {children}
              </ModalDialog>
            </div>
            <div
              className={`modal-backdrop fade ${
                state === "entered" ? "show" : ""
              }`}
            />
          </React.Fragment>
        )}
      </Transition>,
      document.body
    );
  }
}

export default Modal;
