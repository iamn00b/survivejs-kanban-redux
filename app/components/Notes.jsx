// @flow
import React from 'react';

import Note from './Note';

import type { NotesState } from '../types/StateTypes';

function Notes({ notes }: NotesState) {
  return (
    <ul>
      {notes.map(note =>
        <Note key={`noteId#${note.id}`} note={note} />
      )}
    </ul>
  );
}

export default Notes;
