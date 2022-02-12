import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "62077a8ccb224ebb0b04ce08",
      user: "62013afaed510769ecc99c18",
      title: "New Note",
      description: "Please save the Note Properly",
      tag: "Youtube",
      date: "2022-02-12T09:14:52.758Z",
      __v: 0,
    },
    {
      _id: "6207a934b49c8f5b84b998f7",
      user: "62013afaed510769ecc99c18",
      title: "Deloitte",
      description: "Deloitte is a service-based company",
      tag: "CompanyData",
      date: "2022-02-12T12:33:56.810Z",
      __v: 0,
    },
    {
      _id: "6207a948b49c8f5b84b998f9",
      user: "62013afaed510769ecc99c18",
      title: "NetCracker",
      description: "Netcracker is a Product-based company",
      tag: "CompanyData",
      date: "2022-02-12T12:34:16.122Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
      
  const note = {
        _id: "6207a948b49c8f5deeb84b998f9",
        user: "62013afaed510769ecc99c18",
        title: title,
        description: description,
        tag: tag,
        date: "2022-02-12T12:34:16.122Z",
        __v: 0,
      };
  console.log("Adding a new note...!!!");
  setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = () => {};

  // Edit a Note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
