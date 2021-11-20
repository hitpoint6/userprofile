import Card from "./Card";
import Button from "./Button";
import classes from "./Modal.module.css";

const ModalOverlay = function (props) {
  return (
    <Card className={classes.modal}>
      <header>
          <h2>{props.header}</h2>
      </header>
      <div className={classes.body}>{props.body}</div>
      <footer>
          <Button onClick={props.onClose}>Close</Button>
      </footer>
    </Card>
  );
};

const BackDrop = function(props) {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const Modal = function(props) {
    return (
        <>
        <ModalOverlay header={props.header} body={props.body} onClose={props.onClose}/>
        <BackDrop onClose={props.onClose}/>
        </>
    )
}

export default Modal;
