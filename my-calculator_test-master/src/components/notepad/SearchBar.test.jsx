import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders SearchBar component', () => {
  render(<SearchBar searchTerm="" setSearchTerm={() => {}} />);
  expect(screen.getByPlaceholderText('Search notes...')).toBeInTheDocument();
});

test('calls setSearchTerm on input change', () => {
  const setSearchTerm = jest.fn();
  render(<SearchBar searchTerm="" setSearchTerm={setSearchTerm} />);
  fireEvent.change(screen.getByPlaceholderText('Search notes...'), { target: { value: 'Test' } });
  expect(setSearchTerm).toHaveBeenCalledWith('Test');
});
