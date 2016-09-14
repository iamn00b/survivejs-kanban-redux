// @flow
import React from 'react';
import CSSModules from 'react-css-modules';

import * as styles from './Note.css';

import type { NoteState } from '../types/StateTypes';

function Note({ note }: NoteState) {
  return <li styleName='note'>{note.note}</li>;
}

export default CSSModules(Note, styles);
