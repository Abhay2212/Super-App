import React, { useState, useEffect } from "react";
import style from "./Notes.module.css";

function Notes() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const handleNotesChange = (event) => {
    const newNotes = event.target.value;
    setNotes(newNotes);
    localStorage.setItem("notes", newNotes);
  };
  return (
    <div className={style.notescontainer}>
      <h2>All notes</h2>
      <div className="typenotes">
        <textarea
          value={notes}
          onChange={handleNotesChange}
        />
      </div>
    </div>
  );
}

export default Notes;
