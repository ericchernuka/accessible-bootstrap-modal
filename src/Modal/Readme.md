## ModalToggle

```js
<ModalToggle
  ariaLabel="Sweet"
  title={<h1>Hi!</h1>}
  target={({ getTargetProps, targetRef }) => (
    <button type="button" className="btn btn-primary" {...getTargetProps()}>
      Launch Modal
    </button>
  )}
>
  {({ close }) => (
    <React.Fragment>
      <div className="modal-body">Sweet Marie</div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" onClick={close}>
          Cancel
        </button>
        <button type="button" className="btn btn-primary" onClick={close}>
          Save changes
        </button>
      </div>
    </React.Fragment>
  )}
</ModalToggle>
```
