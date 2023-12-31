import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => {
          alert.show("ToDo has been created", "success");
        })
        .catch(() => {
          alert.show("ToDo has not been created", "danger");
        });
      setValue("");
    } else {
      alert.show("Enter some text");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="enter your todo title :)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
