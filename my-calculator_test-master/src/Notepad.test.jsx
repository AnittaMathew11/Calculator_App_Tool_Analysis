import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notepad from './Notepad';

test('renders Notepad component', () => {
  render(<Notepad />);
  expect(screen.getByText('Notepad')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Search notes...')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Note Title')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Write your note here...')).toBeInTheDocument();
});

test('adds a new note', () => {
  render(<Notepad />);
  fireEvent.change(screen.getByPlaceholderText('Note Title'), { target: { value: 'New Note' } });
  fireEvent.change(screen.getByPlaceholderText('Write your note here...'), { target: { value: 'Note Content' } });
  fireEvent.click(screen.getByText('Save Note'));
  expect(screen.getByText('New Note')).toBeInTheDocument();
  expect(screen.getByText('Note Content')).toBeInTheDocument();
});
