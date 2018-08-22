import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import ModalToggle from "./Modal/ModalToggle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalToggle
          ariaLabel="Sweet Modal"
          title="Sweet Modal"
          target={({ getTargetProps }) => (
            <Button variant="primary" {...getTargetProps()}>
              Launch Modal
            </Button>
          )}
        >
          {({ close }) => (
            <React.Fragment>
              <div className="modal-body">Sweet Marie</div>
              <div className="modal-footer">
                <Button onClick={close}>Cancel</Button>
                <Button variant="primary" onClick={close}>
                  Save changes
                </Button>
              </div>
            </React.Fragment>
          )}
        </ModalToggle>
      </div>
    );
  }
}

export default App;
