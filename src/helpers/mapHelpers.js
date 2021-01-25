import {
  MAP_FONT,
  MAP_LINE_COLOR,
  MAP_HIGHLIGHT_COLOR,
  CIRCLE_RADIUS,
  LINE_WIDTH,
  SELECTED_LINE_WIDTH,
} from "../constants/map";

function generateMovementsOnMap(canvas, movements, uiState) {
  let context = canvas.getContext("2d");
  fitToContainer(canvas);

  movements.forEach((movement, idx) => {
    context.beginPath();
    context.font = MAP_FONT;
    context.strokeStyle = MAP_LINE_COLOR;
    context.fillText(
      movement.start.cityName,
      movement.start.coordinate[0],
      movement.start.coordinate[1]
    );
    context.fillText(
      movement.end.cityName,
      movement.end.coordinate[0],
      movement.end.coordinate[1]
    );
    context.moveTo(movement.start.coordinate[0], movement.start.coordinate[1]);
    context.lineTo(movement.end.coordinate[0], movement.end.coordinate[1]);
    context.lineWidth = LINE_WIDTH;
    context.stroke();

    context.beginPath();
    context.fillStyle = MAP_LINE_COLOR;
    context.arc(
      movement.start.coordinate[0],
      movement.start.coordinate[1],
      CIRCLE_RADIUS,
      0,
      2 * Math.PI
    );
    context.arc(
      movement.end.coordinate[0],
      movement.end.coordinate[1],
      CIRCLE_RADIUS,
      0,
      2 * Math.PI
    );
    context.fill();

    if (uiState.activeMovement === idx) {
      context.beginPath();
      context.strokeStyle = MAP_HIGHLIGHT_COLOR;
      context.moveTo(movement.start.coordinate[0], movement.start.coordinate[1]);
      context.lineTo(movement.end.coordinate[0], movement.end.coordinate[1]);
      context.lineWidth = SELECTED_LINE_WIDTH;
      context.stroke();
    }
  });
}

function generateRoutesOnMap(driverRoute, canvas) {
  let context = canvas.getContext("2d");
  fitToContainer(canvas);

  for (let i = 0; i < driverRoute.length; i++) {
    if (i === 0) {
      context.beginPath();
      context.moveTo(driverRoute[i][0], driverRoute[i][1]);
      context.lineTo(driverRoute[i + 1][0], driverRoute[i + 1][1]);
      context.lineWidth = LINE_WIDTH;
      context.stroke();
      context.strokeStyle = MAP_LINE_COLOR;
    } else {
      context.beginPath();
      context.moveTo(driverRoute[i - 1][0], driverRoute[i - 1][1]);
      context.lineTo(driverRoute[i][0], driverRoute[i][1]);
      context.lineWidth = LINE_WIDTH;
      context.stroke();
      context.strokeStyle = MAP_LINE_COLOR;
    }

    context.beginPath();
    context.arc(
      driverRoute[i][0],
      driverRoute[i][1],
      CIRCLE_RADIUS,
      0,
      2 * Math.PI
    );
    context.fill();

    context.font = MAP_FONT;
    context.fillText(
      `${i + 1}. ${driverRoute[i][0]},${driverRoute[i][1]}`,
      driverRoute[i][0],
      driverRoute[i][1]
    );
  }
}

function fitToContainer(canvas) {
  canvas.style.width = "100%";
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

export { generateMovementsOnMap, generateRoutesOnMap };
