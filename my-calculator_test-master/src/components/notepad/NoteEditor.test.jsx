import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NoteEditor from './NoteEditor';

test('renders NoteEditor component', () => {
  render(<NoteEditor currentTitle="" setCurrentTitle={() => {}} currentNote="" setCurrentNote={() => {}} handleSaveNote={() => {}} editingId={null} cancelEditing={() => {}} />);
  expect(screen.getByPlaceholderText('Note Title')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Write your note here...')).toBeInTheDocument();
});

test('calls setCurrentTitle on title input change', () => {
  const setCurrentTitle = jest.fn();
  render(<NoteEditor currentTitle="" setCurrentTitle={setCurrentTitle} currentNote="" setCurrentNote={() => {}} handleSaveNote={() => {}} editingId={null} cancelEditing={() => {}} />);
  fireEvent.change(screen.getByPlaceholderText('Note Title'), { target: { value: 'New Title' } });
  expect(setCurrentTitle).toHaveBeenCalledWith('New Title');
});

test('calls setCurrentNote on note input change', () => {
  const setCurrentNote = jest.fn();
  render(<NoteEditor currentTitle="" setCurrentTitle={() => {}} currentNote="" setCurrentNote={setCurrentNote} handleSaveNote={() => {}} editingId={null} cancelEditing={() => {}} />);
  fireEvent.change(screen.getByPlaceholderText('Write your note here...'), { target: { value: 'New Note' } });
  expect(setCurrentNote).toHaveBeenCalledWith('New Note');
});

test('calls handleSaveNote on save button click', () => {
  const handleSaveNote = jest.fn();
  render(<NoteEditor currentTitle="" setCurrentTitle={() => {}} currentNote="" setCurrentNote={() => {}} handleSaveNote={handleSaveNote} editingId={null} cancelEditing={() => {}} />);
  fireEvent.click(screen.getByText('Save Note'));
  expect(handleSaveNote).toHaveBeenCalled();
});
