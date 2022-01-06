import React, { useState } from 'react';
import Board from '@asseinfo/react-kanban';

const App = (props) => {
  // Prepare to draw board
  const [kanbanBoard] = useState(props.boardData);

  if (kanbanBoard.columns.length === 0) {
    return (
      <div
        style={{
          border: '1px solid white',
          padding: '0.5em',
          marginTop: '-2rem',
        }}
      >
        Waiting for data to be rendered... Start by creating a child block
        below, and adding your data below it!
      </div>
    );
  } else {
    return <Board>{kanbanBoard}</Board>;
  }
};

export default App;
