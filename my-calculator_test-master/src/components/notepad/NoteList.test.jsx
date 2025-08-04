import React from 'react';
import { render, screen } from '@testing-library/react';
import NoteList from './NoteList';

test('renders NoteList component with no notes', () => {
  render(<NoteList notes={[]} searchTerm="" handleEditNote={() => {}} handleDeleteNote={() => {}} />);
  expect(screen.getByText('No notes yet. Create one!')).toBeInTheDocument();
});

test('renders NoteList component with matching notes', () => {
  const notes = [{ id: 1, title: 'Test Note', content: 'Test Content', lastModified: new Date().toISOString() }];
  render(<NoteList notes={notes} searchTerm="Test" handleEditNote={() => {}} handleDeleteNote={() => {}} />);
  expect(screen.getByText('Test Note')).toBeInTheDocument();
  expect(screen.getByText('Test Content')).toBeInTheDocument();
});
