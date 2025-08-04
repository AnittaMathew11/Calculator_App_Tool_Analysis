import React from 'react';

function NoteItem({ note, handleEditNote, handleDeleteNote }) {
  return (
    <div className="note-card">
      <div className="note-header">
        <h3>{note.title}</h3>
        <div className="note-actions">
          <button onClick={() => handleEditNote(note)}>Edit</button>
          <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
        </div>
      </div>
      <p className="note-content">{note.content}</p>
      <p className="note-date">
        Last modified: {new Date(note.lastModified).toLocaleString()}
      </p>
    </div>
  );
}

export default NoteItem;