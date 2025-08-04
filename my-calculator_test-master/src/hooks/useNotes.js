import { useState, useEffect } from 'react';

function useNotes() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSaveNote = () => {
    if (currentTitle.trim() === '' || currentNote.trim() === '') {
      alert('Please enter both title and content for your note');
      return;
    }

    if (editingId !== null) {
      setNotes(notes.map(note => 
        note.id === editingId 
          ? { ...note, title: currentTitle, content: currentNote, lastModified: new Date().toISOString() } 
          : note
      ));
      setEditingId(null);
    } else {
      const newNote = {
        id: Date.now(),
        title: currentTitle,
        content: currentNote,
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString()
      };
      setNotes([...notes, newNote]);
    }

    setCurrentTitle('');
    setCurrentNote('');
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setCurrentTitle('');
      setCurrentNote('');
    }
  };

  const handleEditNote = (note) => {
    setCurrentTitle(note.title);
    setCurrentNote(note.content);
    setEditingId(note.id);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setCurrentTitle('');
    setCurrentNote('');
  };

  return {
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
  };
}

export default useNotes;
