// @flow
import React from 'react';

import type { NoteState } from '../types/StateTypes';

function Note({ note }: NoteState) {
  return <li>{note.note}</li>;
}

export default Note;
