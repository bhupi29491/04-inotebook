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

  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
