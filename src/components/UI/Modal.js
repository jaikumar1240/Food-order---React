import React, { Fragment } from "react";
import classes from './Modal.module.css';
import ReactDOM from "react-dom";
const Modal = (props) => {
    const Backdrop = () => {
        return <div onClick={props.onClose} className={classes.backdrop}></div>
    }
    const Content = () => {
        return (
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        )
    }
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Fragment>
                    <Backdrop />
                    <Content />
                </Fragment>,
                document.getElementById('overlays')
            )}

        </Fragment>
    )
}
export default Modal; 
