import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NoteItem from './NoteItem';

test('renders NoteItem component', () => {
  const note = { id: 1, title: 'Test Note', content: 'Test Content', lastModified: new Date().toISOString() };
  render(<NoteItem note={note} handleEditNote={() => {}} handleDeleteNote={() => {}} />);
  expect(screen.getByText('Test Note')).toBeInTheDocument();
  expect(screen.getByText('Test Content')).toBeInTheDocument();
});

test('calls handleEditNote on edit button click', () => {
  const note = { id: 1, title: 'Test Note', content: 'Test Content', lastModified: new Date().toISOString() };
  const handleEditNote = jest.fn();
  render(<NoteItem note={note} handleEditNote={handleEditNote} handleDeleteNote={() => {}} />);
  fireEvent.click(screen.getByText('Edit'));
  expect(handleEditNote).toHaveBeenCalledWith(note);
});

test('calls handleDeleteNote on delete button click', () => {
  const note = { id: 1, title: 'Test Note', content: 'Test Content', lastModified: new Date().toISOString() };
  const handleDeleteNote = jest.fn();
  render(<NoteItem note={note} handleEditNote={() => {}} handleDeleteNote={handleDeleteNote} />);
  fireEvent.click(screen.getByText('Delete'));
  expect(handleDeleteNote).toHaveBeenCalledWith(note.id);
});
