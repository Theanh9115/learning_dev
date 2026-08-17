let containerDiv = document.querySelector(".container");

let gridSize = 16;

let isHolding = false;
document.addEventListener("mousedown", () => (isHolding = true));
document.addEventListener("mouseup", () => (isHolding = false));

let childOpacity = new Map();
for (let i = 0; i < gridSize * gridSize; i++) {
  let childDiv = document.createElement("div");
  childOpacity.set(childDiv, 0);
  childDiv.addEventListener("mouseenter", function () {
    if (isHolding) {
      if (childOpacity.get(childDiv) <= 0.9)
        childOpacity.set(childDiv, childOpacity.get(childDiv) + 0.1);
      childDiv.setAttribute("style", `opacity: ${childOpacity.get(childDiv)}`);
    }
  });
  childDiv.classList.add("child");
  containerDiv.appendChild(childDiv);
  containerDiv.setAttribute(
    "style",
    `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`,
  );
}

let settingBtn = document.querySelector("#setting-button");
settingBtn.addEventListener("click", function () {
  gridSize = Number(prompt("How many number of square per side?"));
  console.log(gridSize);
  if (gridSize > 100) {
    gridSize = 16;
  } else {
    // Clear and reassign
    containerDiv.replaceChildren();

    for (let i = 0; i < gridSize * gridSize; i++) {
      let childDiv = document.createElement("div");
      childOpacity.set(childDiv, 0);
      childDiv.addEventListener("mouseenter", function () {
        if (isHolding) {
          if (childOpacity.get(childDiv) <= 0.9)
            childOpacity.set(childDiv, childOpacity.get(childDiv) + 0.1);
          childDiv.setAttribute(
            "style",
            `opacity: ${childOpacity.get(childDiv)}`,
          );
        }
      });
      childDiv.classList.add("child");
      containerDiv.appendChild(childDiv);
    }
    containerDiv.setAttribute(
      "style",
      `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`,
    );
  }
  console.log(containerDiv.querySelectorAll("div").length);
});
