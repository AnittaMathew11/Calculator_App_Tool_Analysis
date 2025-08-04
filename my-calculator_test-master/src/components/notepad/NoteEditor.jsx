import React from 'react';

function NoteEditor({ 
  currentTitle, 
  setCurrentTitle, 
  currentNote, 
  setCurrentNote, 
  handleSaveNote, 
  editingId, 
  cancelEditing 
}) {
  return (
    <div className="note-editor">
      <input
        type="text"
        placeholder="Note Title"
        value={currentTitle}
        onChange={(e) => setCurrentTitle(e.target.value)}
        className="note-title-input"
      />
      <textarea
        placeholder="Write your note here..."
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
        className="note-content-input"
      />
      <button onClick={handleSaveNote}>
        {editingId !== null ? 'Update Note' : 'Save Note'}
      </button>
      {editingId !== null && (
        <button onClick={cancelEditing}>
          Cancel
        </button>
      )}
    </div>
  );
}

export default NoteEditor;