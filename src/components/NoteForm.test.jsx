import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NoteForm from './NoteForm';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

describe('NoteForm', () => {
  test('updates input values on change', () => {
    const { getByLabelText } = render(<NoteForm />);
  
    const titleInput = getByLabelText('Title:');
    const scoreInput = getByLabelText('Score:');
    const commentTextarea = getByLabelText('Comment:');
  
    fireEvent.change(titleInput, { target: { value: 'New Title' } });
    fireEvent.change(scoreInput, { target: { value: '15' } });
    fireEvent.change(commentTextarea, { target: { value: 'New comment' } });
  
    expect(titleInput.value).toBe('New Title');
    expect(scoreInput.value).toBe('15');
    expect(commentTextarea.value).toBe('New comment');
  });
});
