import React from "react";
import ClickOutHandler from "react-onclickout";

class ModalDialog extends React.Component {
  render() {
    return (
      <ClickOutHandler onClickOut={this.props.onClickOut}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">{this.props.children}</div>
        </div>
      </ClickOutHandler>
    );
  }
}

export default ModalDialog;
