import React from 'react';
import './App.css';
import SearchBar from './components/notepad/SearchBar';
import NoteEditor from './components/notepad/NoteEditor';
import NoteList from './components/notepad/NoteList';
import useNotes from './hooks/useNotes';

function Notepad() {
  const {
    notes,
    currentNote,
    currentTitle,
    searchTerm,
    editingId,
    setCurrentNote,
    setCurrentTitle,
    setSearchTerm,
    handleSaveNote,
    handleDeleteNote,
    handleEditNote,
    cancelEditing,
  } = useNotes();

  return (
    <div className="notepad">
      <h1>Notepad</h1>
      
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      
      <NoteEditor 
        currentTitle={currentTitle}
        setCurrentTitle={setCurrentTitle}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        handleSaveNote={handleSaveNote}
        editingId={editingId}
        cancelEditing={cancelEditing}
      />
      
      <NoteList 
        notes={notes}
        searchTerm={searchTerm}
        handleEditNote={handleEditNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  );
}

export default Notepad;