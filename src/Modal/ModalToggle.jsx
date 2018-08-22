import React from "react";
import KeyHandler, { KEYDOWN } from "react-key-handler";
import Toggle from "react-toggled";
import Modal from "./Modal";

class ModalToggle extends React.Component {
  static defaultProps = {
    onToggle: () => {}
  };

  targetRef = React.createRef();

  onToggle = (on, ...args) => {
    if (!on && this.targetRef.current) {
      this.targetRef.current.focus();
    }

    this.props.onToggle(on, ...args);
  };

  render() {
    const { ariaLabel, target, children, isOpen, title } = this.props;

    return (
      <Toggle on={isOpen} onToggle={this.onToggle.bind(this)}>
        {({ on, getTogglerProps, setOff: close, setOn: open, toggle }) => (
          <React.Fragment>
            {target({
              getTargetProps: props =>
                getTogglerProps({ ...props, ref: this.targetRef }),
              isOpen: on,
              toggle,
              close,
              open
            })}
            <Modal
              isOpen={on}
              onClose={close}
              ariaLabel={ariaLabel}
              title={title}
            >
              <KeyHandler
                keyEventName={KEYDOWN}
                keyValue="Escape"
                onKeyHandle={close}
              />
              {typeof children === "function"
                ? children({
                    isOpen: on,
                    toggle,
                    close,
                    open
                  })
                : children}
            </Modal>
          </React.Fragment>
        )}
      </Toggle>
    );
  }
}

export default ModalToggle;
