function generateMovementsOnMap(canvas, movements, uiState) {
  let context = canvas.getContext("2d");

  fitToContainer(canvas);

  movements.forEach((movement, idx) => {
    context.beginPath();
    context.font = "30px Arial";
    context.strokeStyle = "black";
    context.fillText(
      movement.description,
      movement.start[0],
      movement.start[1]
    );
    context.moveTo(movement.start[0], movement.start[1]);
    context.lineTo(movement.end[0], movement.end[1]);
    context.lineWidth = 1;
    context.stroke();

    context.beginPath();

    context.fillStyle = "black";
    context.arc(movement.start[0], movement.start[1], 5, 0, 2 * Math.PI);
    context.arc(movement.end[0], movement.end[1], 5, 0, 2 * Math.PI);
    context.fill();

    if (uiState.activeMovement === idx) {
      context.beginPath();
      context.strokeStyle = "#FF0000";
      context.moveTo(movement.start[0], movement.start[1]);
      context.lineTo(movement.end[0], movement.end[1]);
      context.lineWidth = 3;
      context.stroke();
    }
  });
}

function generateRoutesOnMap(driverRoute, canvas) {
  let context = canvas.getContext("2d");

  fitToContainer(canvas);


  for (let i = 0; i < driverRoute.length; i++) {
    context.font = "20px Arial";
    if (i === 0) {
      context.beginPath();
      context.moveTo(driverRoute[i][0], driverRoute[i][1]);
      context.lineTo(driverRoute[i + 1][0], driverRoute[i + 1][1]);
      context.lineWidth = 1;
      context.stroke();
      context.strokeStyle = getRandomColor();
    } else {
      context.beginPath();
      context.moveTo(driverRoute[i - 1][0], driverRoute[i - 1][1]);
      context.lineTo(driverRoute[i][0], driverRoute[i][1]);
      context.lineWidth = 1;
      context.stroke();
      context.strokeStyle = getRandomColor();
    }

    context.beginPath();
    context.arc(driverRoute[i][0], driverRoute[i][1], 5, 0, 2 * Math.PI);

    context.fill();

    context.font = "20px Arial";
    context.fillText(
      `${i + 1}. ${driverRoute[i][0]},${driverRoute[i][1]}`,
      driverRoute[i][0],
      driverRoute[i][1]
    );
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function fitToContainer(canvas) {
  canvas.style.width = "100%";
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

export { generateMovementsOnMap, generateRoutesOnMap };
