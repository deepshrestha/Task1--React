import React from "react";
import { createPortal } from "react-dom";

function Portal({children}) {
    const modalRoot = document.getElementById("modal-root");
    return createPortal(children, modalRoot);
}

function Modal({ modalForm, children, visible, toggle, onSaveHandler }) {
    return (
        <>
            { visible ?
            <Portal>
                { modalForm ? 
                <form onSubmit={onSaveHandler}>
                    <div className="modal fade" id="showModal" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="showModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="showModalLabel">Modal</h5>
                                <button className="close" data-dismiss="modal" onClick={toggle} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {children}
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" data-dismiss="modal" onClick={toggle}>Close</button>
                                <button className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </form>
                :
                <div className="modal fade" id="showModal" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="showModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="showModalLabel">Modal</h5>
                            <button className="close" data-dismiss="modal" onClick={toggle} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-dismiss="modal" onClick={toggle}>Close</button>
                            <button className="btn btn-primary" onClick={onSaveHandler}>Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
                }
            </Portal>
            : null
            }
        </>
    )
}

export default Modal;