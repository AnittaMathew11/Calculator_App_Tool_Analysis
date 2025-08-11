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
          <div key={note.id}>
            <h3>{note.title}</h3>
            {/* Unsafe: Injecting raw HTML without sanitization */}
            <div dangerouslySetInnerHTML={{ __html: note.content }} />
            <button onClick={() => handleEditNote(note.id)}>Edit</button>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
