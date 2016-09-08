// @flow
import React from 'react';

import Notes from './components/Notes';

import type { NotesState } from './types/StateTypes';

class App extends React.Component {

  constructor(props: {}) {
    super(props);

    this.state = {
      notes: [
        {
          id: 1,
          note: 'don\'t forget to smile :)'
        }
      ]
    };
  }

  state: { notes: NotesState };
  props: {};

  render() {
    return (
      <div>
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
