import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, searchTerm, handleEditNote, handleDeleteNote }) {
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="notes-list">
      <h2>Saved Notes</h2>
      {filteredNotes.length === 0 ? (
        <p className="no-notes-message">
          {searchTerm ? 'No matching notes found' : 'No notes yet. Create one!'}
        </p>
      ) : (
        filteredNotes.map(note => (
          <NoteItem 
            key={note.id} 
            note={note} 
            handleEditNote={handleEditNote} 
            handleDeleteNote={handleDeleteNote} 
          />
        ))
      )}
    </div>
  );
}

export default NoteList;