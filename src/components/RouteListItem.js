import React from "react";

function RouteListItem({ route, pos }) {
  return (
    <div className="route__item">
      {pos + 1}. ({route[0]},{route[1]})
    </div>
  );
}

export default RouteListItem;
