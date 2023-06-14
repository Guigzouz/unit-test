import { render, screen } from '@testing-library/react';
import NoteList from '../components/NoteList';
import { describe, it, expect } from 'vitest';
import React from 'react';
import '@testing-library/jest-dom';


describe('NoteList', () => {

test('renders a list of notes', () => {
  // Mock the notes data
  const mockNotes = [
    { id: '1', title: 'Note 1', score: 16, comment: 'Good note', createdDate: new Date() },
    { id: '2', title: 'Note 2', score: 12, comment: 'Average note', createdDate: new Date() },
  ];

  // Render the component with the mock data
  render(<NoteList notes={mockNotes} />);

  // Verify that the notes are displayed correctly
  const note1Element = screen.getByText(/Note 1/i);
  const note2Element = screen.getByText(/Note 2/i);

  expect(note1Element).toBeInTheDocument();
  expect(note2Element).toBeInTheDocument();
});
});