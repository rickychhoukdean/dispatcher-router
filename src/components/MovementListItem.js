import React from "react";

function MovementListItem({ start, end, description }) {
  return (
    <div>
      Start:{start}
      End:{end}
      Description:{description}
      <button>Delete</button>
      <button>Modify</button>
    </div>
  );
}

export default MovementListItem;
