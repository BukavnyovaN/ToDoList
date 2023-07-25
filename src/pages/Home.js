import React, { useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { Loader } from "../components/Loader";

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } =
    useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <Form />
      <hr />
      {loading ? <Loader /> : <List notes={notes} onRemove={removeNote} />}
    </div>
  );
};
