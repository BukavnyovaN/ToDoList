import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return (
    <CSSTransition
      in={alert.visible}
      timeout={500}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={`alert alert-${
          alert.type || `warning`
        } alert-dismissible container note`}
      >
        <strong>Attention!</strong>
        {alert.text}
        <button onClick={hide} type="button" class="btn btn-sm close">
          <span>&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
};
